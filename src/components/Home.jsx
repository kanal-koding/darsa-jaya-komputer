// src/components/Home.js
import React, { useState, useEffect } from 'react';

const images = [
  '/images/computer1.jpg', // Add the path to your images
  '/images/computer2.jpg',
  '/images/computer3.jpg',
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    
    <section id="home" className="h-screen bg-gradient-to-br from-ig-purple via-ig-pink to-ig-orange text-white flex items-center justify-center">
    
      <div className="w-full h-full relative overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Computer ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            
          />
          
        ))}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === currentImage ? 'bg-blue-600' : 'bg-blue-300'
              }`}
            ></span>
          ))}
        </div>
        </div>
    </section>
  );
}
