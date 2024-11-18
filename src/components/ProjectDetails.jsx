import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "./data/projectData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <Link to="/" className="text-blue-500 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div id="projects" className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <p className="text-gray-700 mt-4">{project.details}</p>
          <div className="flex mt-6 space-x-4">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg shadow-md hover:scale-110 transform transition duration-300"
              />
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-8 bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded transition duration-300"
          >
            Visit Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
