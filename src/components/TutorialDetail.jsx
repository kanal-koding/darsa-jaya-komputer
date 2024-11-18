// src/components/TutorialDetail.js
import React from 'react';
import { useParams } from 'react-router-dom'; // Untuk mendapatkan parameter dari URL
import tutorialData from './data/tutorialData'; // Mengimpor data tutorial
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom

const TutorialDetail = () => {
  const { id } = useParams(); // Mengambil parameter ID dari URL
  const tutorial = tutorialData.find((tut) => tut.id === parseInt(id)); // Mencari tutorial berdasarkan ID

  if (!tutorial) {
    return <p>Tutorial tidak ditemukan.</p>;
  }

  return (
    <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-white text-center mb-6">{tutorial.title}</h1>
      <p className="text-blue-600 font-bold text-center mb-4">{tutorial.category}</p>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-700 mb-4">{tutorial.description}</p>
        <Link
          to="./data/tutorialData"
          className="px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-all transform hover:scale-105"
        >
          Kembali ke Tutorial
        </Link>
      </div>
    </div>
  );
};

export default TutorialDetail;
