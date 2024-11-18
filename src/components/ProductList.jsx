import React from "react";
import { Link } from "react-router-dom";
import products from "./data/productData";

const ProductList = () => {
  return (
    <div id="products" className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white py-16 px-6">
      <h2 className="text-center text-3xl font-bold mb-8">Our Products</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white text-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">{product.title}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-gray-800 font-semibold mt-2">{product.price}</p>
              <Link
                to={`/products/${product.id}`}
                className="block mt-4 bg-purple-500 hover:bg-purple-700 text-white text-center py-2 px-4 rounded transition duration-300"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
