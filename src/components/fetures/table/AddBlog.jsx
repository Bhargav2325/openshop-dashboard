import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [title, setTitle] = useState(localStorage.getItem("title") || "");
  const [category, setCategory] = useState(
    localStorage.getItem("category") || "",
  );
  const [description, setDescription] = useState(
    localStorage.getItem("description") || "",
  );
  const [imgURL, setImgURL] = useState(localStorage.getItem("imgURL") || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("title", title);
  }, [title]);

  useEffect(() => {
    localStorage.setItem("category", category);
  }, [category]);

  useEffect(() => {
    localStorage.setItem("description", description);
  }, [description]);

  useEffect(() => {
    localStorage.setItem("imgURL", imgURL);
  }, [imgURL]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const newBlog = {
      title,
      category,
      description,
      imgURL,
    };

    const token = JSON.parse(localStorage.getItem("user_info"));
    console.log("Token:", token);

    if (!token) {
      setError("No authentication token found");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://service.apikeeda.com/api/v1/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-apikeeda-key": "i1725873093919kzb130497435ru",
          Authorization: `${token.authorization}`,
        },
        body: JSON.stringify(newBlog),
      });

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.message || "Failed to add blog");
      }

      const data = await response.json();
      console.log("Blog added successfully:", data);

      const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
      storedBlogs.push(newBlog);
      localStorage.setItem("blogs", JSON.stringify(storedBlogs));

      setTitle("");
      setCategory("");
      setDescription("");
      setImgURL("");
      // localStorage.removeItem("title");
      // localStorage.removeItem("category");
      // localStorage.removeItem("description");
      // localStorage.removeItem("imgURL");

      navigate("/table");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-5">Add New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg w-full p-2"
            placeholder="Enter blog title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-lg w-full p-2"
            placeholder="Enter blog category"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-lg w-full p-2"
            placeholder="Enter blog description"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Image URL</label>
          <input
            type="url"
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
            className="border rounded-lg w-full p-2"
            placeholder="Enter image URL"
          />
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
