// src/components/Tutorials.js
import React, { useState } from 'react';
// import TutorialModal from './TutorialModal';
import tutorialData from './data/tutorialData';
import TutorialList from './TutorialList';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom

const Tutorials = () => {
  // const [ setSelectedTutorial] = useState(null);

  // const openModal = (tutorial) => {
  //   setSelectedTutorial(tutorial);
  // };

  // const closeModal = () => {
  //   setSelectedTutorial(null);
  // };

  return (
    <div id='tutorials' className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 py-16 px-6 shadow-lg">
      <h1 className="text-4xl font-bold text-white text-center mb-6">Tutorial</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {/* {tutorialData.map((tutorial) => (
          <div
            key={tutorial.id}
            onClick={() => openModal(tutorial)}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold text-gray-800">{tutorial.title}</h2>
            <p className="text-blue-600 font-bold mt-2">{tutorial.category}</p>
            <p className="text-gray-600 mt-2">{tutorial.shortDescription}</p> */}

            {/* Link ke halaman detail tutorial */}
            <Link
              to={`/tutorial/${tutorialData.id}`} // Mengarah ke halaman detail berdasarkan ID tutorial
            >
            </Link>
            
            {/* Tombol untuk membaca tutorial lebih lanjut */}
            {/* <button
              onClick={() => openModal(tutorial)} // Membuka modal saat tombol diklik
              className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-all transform hover:scale-105"
            >
              Baca Tutorial
            </button> */}
          {/* </div> */}
        {/* ))} */}
      </div>

      {/* Modal untuk menampilkan detail tutorial
      {selectedTutorial && (
        <TutorialModal
          tutorial={selectedTutorial}
          closeModal={closeModal}
        />
      )} */}
      <TutorialList/>
    </div>
  );
};

export default Tutorials;