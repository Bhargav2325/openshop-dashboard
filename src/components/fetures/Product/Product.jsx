import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    try {
      const storedProduct = JSON.parse(localStorage.getItem("product")) || [];
      if (Array.isArray(storedProduct)) {
        setProducts(storedProduct);
        setFilteredProduct(storedProduct);
      } else {
        console.error("Stored Product is not an array");
      }
    } catch (error) {
      console.error("Failed to parse product from localStorage", error);
    }
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProduct(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) 
        
      );
      setFilteredProduct(filtered);
    }
  }, [searchQuery, products]);

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
        <Link to="/addproduct">
          <div className="text-lg rounded-lg cursor-pointer border bg-blue-500 text-white px-4 py-2">
            Add Product
          </div>
        </Link>
      </div>

      <h1 className="text-2xl font-semibold mb-5">Category</h1>
      {filteredProduct.length === 0 ? (
        <p>No category available</p>
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Category</th>
              
            </tr>
          </thead>
          <tbody>
            {filteredProduct.map((product, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{product.name}</td>
               
                <hr />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Product;
