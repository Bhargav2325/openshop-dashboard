import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  // Function to generate random ID
  const generateRandomId = () => {
    return [...Array(24)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const categoryId = generateRandomId(); // Generate the random ID here

    const newProduct = {
      id: categoryId, // Add the generated ID to the product object
      name,
    };

    const token = JSON.parse(localStorage.getItem("user_info"));
    console.log("Token:", token);

    if (!token) {
      setError("No authentication token found");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://service.apikeeda.com/api/v1/category",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-apikeeda-key": "x1725882719250qhx694508806km",
            Authorization: `${token.authorization}`,
          },
          body: JSON.stringify(newProduct),
        }
      );

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.message || "Failed to add category");
      }

      const data = await response.json();
      console.log("Category added successfully:", data);

      const storedProducts = JSON.parse(localStorage.getItem("product")) || [];
      storedProducts.push(newProduct);
      localStorage.setItem("product", JSON.stringify(storedProducts));

      setName("");

      localStorage.removeItem("name");

      navigate("/product");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-5">Add New Category</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Category</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg w-full p-2"
            placeholder="Enter Category name"
            required
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

export default AddProduct;
