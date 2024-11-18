// src/components/Product.js
import React from 'react';

const products = [
  { id: 1, name: 'Laptop A', price: '$1000' },
  { id: 2, name: 'Desktop B', price: '$1500' },
  // Add more products
];

export default function Products() {
  return (
<section className="py-16 bg-gradient-to-br from-ig-orange to-ig-pink text-white">
  <div className="container mx-auto">
    <h2 className="text-3xl font-semibold text-center mb-8">Our Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="p-4 bg-white text-ig-purple shadow-lg rounded hover:bg-ig-pink transition">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-ig-orange">{product.price}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
