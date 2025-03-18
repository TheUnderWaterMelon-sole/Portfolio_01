//ProjectCard.jsx
import React from "react";
// import { IonIcon } from "react-ionicons";
import { Heart, HeartOff } from "lucide-react";

import "../main.css";
import "../css/Project.css";

function ProjectCard({ project, favorites, toggleFavorite }) {
  return (
    
      <div className="card-container flex m-24 ">
        {/* Card Artwork */}
        <div className="card-image">
          <img className="mb-8"
            src={project.projectImage}
            alt={project.title}
          />
        </div>

        {/* CardInfo */}
        <div className="card-info mb-8">
          <h2 className="h2">{project.title}</h2>
          <p className="p">{project.projectType}</p>
          <p className="p">${project.shortDescription}</p>
        </div>

        {/* Favorite Button */}
        <button
            onClick={() => toggleFavorite(project.id)}
            className={`rounded-lg transition-all duration-300 ${
              favorites.includes(project.id) ? "bg-red-500" : "bg-gray-400"
            }`}
            >
            {favorites.includes(project.id) ? (
              <Heart className="icon-on" />
            ) : (
            <HeartOff className="icon-off" />)}
          </button>
      </div>
    
  );
}

export default ProjectCard;
