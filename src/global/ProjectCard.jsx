//ProjectCard.jsx
import React from "react";
// import { IonIcon } from "react-ionicons";
import { Heart, HeartOff } from "lucide-react";

function ProjectCard({ project, favorites, toggleFavorite }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 border border-gray-200">
      {/* Game Artwork */}
      <img
        src={project.projectImage}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Game Info */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="text-sm text-gray-500">{project.projectType}</p>
        <p className="text-md font-bold mt-2">${project.shortDescription}</p>
      </div>

      {/* Favorite Button */}
      <button
  onClick={() => toggleFavorite(project.id)}
  className={`mt-4 px-4 py-2 text-white rounded-lg transition-all duration-300 ${
    favorites.includes(project.id) ? "bg-red-500" : "bg-gray-400"
  }`}
>
{favorites.includes(project.id) ? (
  <Heart className="w-5 h-5 text-white fill-current" />
) : (
  <Heart className="w-5 h-5 text-white" />
)}</button>
    </div>
  );
}

export default ProjectCard;
