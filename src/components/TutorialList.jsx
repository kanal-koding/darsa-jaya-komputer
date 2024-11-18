// src/components/TutorialList.js
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import tutorialData from './data/tutorialData';


const TutorialList = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(null);

  const openModal = (tutorial) => {
    setSelectedTutorial(tutorial);
  };

  const closeModal = () => {
    setSelectedTutorial(null);
  };

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tutorialData.map((tutorial) => (
          <div key={tutorial.id} className="bg-gray-600 text-white border p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">{tutorial.title}</h3>
            <p className="text-white">{tutorial.category}</p>
            <p className="text-white">{tutorial.shortContent}</p>
            <button
              onClick={() => openModal(tutorial)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Baca Tutorial
            </button>
          </div>
        ))}
      

      {/* Full-Screen Modal */}
      {selectedTutorial && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white w-full h-full p-6 overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-red-500 text-2xl"
            >
              <FaTimes />
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedTutorial.title}</h2>
            <p className="text-lg">{selectedTutorial.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorialList;
