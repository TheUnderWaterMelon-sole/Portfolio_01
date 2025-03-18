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
          <img className="mb-4"
            src={project.projectImage}
            alt={project.title}
          />
        </div>

        {/* CardInfo */}
        <div className="card-info mb-4">
          <h2 className="h2 mb-12">{project.title}</h2>
          <h3 className="h3 ">{project.projectType}</h3>
          <p className="p pt-16">{project.shortDescription}</p>
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
