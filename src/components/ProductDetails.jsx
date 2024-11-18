import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "./data/productData";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Link to="/" className="text-purple-500 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-gray-700 mt-4">{product.details}</p>
          <p className="text-green-600 font-bold mt-4">{product.price}</p>
          <div className="flex mt-6 space-x-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg shadow-md hover:scale-110 transform transition duration-300"
              />
            ))}
          </div>
          <a
      href={`https://wa.me/${+6285213007480}`}
      target="_blank"
      rel="noopener noreferrer"
            className="block mt-8 bg-purple-500 hover:bg-purple-700 text-white text-center py-2 px-4 rounded transition duration-300"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
