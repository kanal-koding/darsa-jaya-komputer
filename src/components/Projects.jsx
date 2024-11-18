import React from "react";
import { Link } from "react-router-dom";
import projects from "./data/projectData";

const Projects = () => {
  return (
    <div id="projects" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16 px-6">
      <h2 className="text-center text-3xl font-bold mb-8">Our Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <Link
                to={`/projects/${project.id}`}
                className="block mt-4 bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
