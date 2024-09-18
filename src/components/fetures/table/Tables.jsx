import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const Table = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    try {
      const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
      if (Array.isArray(storedBlogs)) {
        setBlogs(storedBlogs);
        setFilteredBlogs(storedBlogs);
      } else {
        console.error("Stored blogs is not an array");
      }
    } catch (error) {
      console.error("Failed to parse blogs from localStorage", error);
    }
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  }, [searchQuery, blogs]);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="flex justify-between items-center my-4">
        <div className="relative">
          <HiOutlineSearch
            size={20}
            className="text-gray-400 absolute top-1/2 left-3 cursor-pointer -translate-y-1/2"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 px-4 pr-4 pl-11 rounded-md"
          />
        </div>
        <Link to="/addblog">
          <div className="text-lg rounded-lg cursor-pointer border bg-blue-500 text-white px-4 py-2">
            Add Blog
          </div>
        </Link>
      </div>

      <h1 className="text-2xl font-semibold mb-5">Blogs</h1>
      {filteredBlogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Image URL</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.map((blog, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{blog.title}</td>
                <td className="py-2 px-4 border-b">{blog.category}</td>
                <td className="py-2 px-4 border-b">{blog.description}</td>
                <td className="py-2 px-4 border-b">
                  <a href={blog.imgURL} target="_blank" rel="noreferrer">
                    View Image
                  </a>
                </td>
                <hr />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
