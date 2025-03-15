// Projects.jsx
import React, { useState } from "react";
import ProjectCard from "../global/ProjectCard";

// images
import locamotionLogo from "../assets/project-images/p1-LOCAMOTION_LogoLaunch._sqr.png";
import bazaWireframes from "../assets/project-images/p2-Baza_project_slides3.18 AM.png";
import marukiLogo from "../assets/project-images/Maruki_logos_b_W_600x400.png";
import rollerskatePhoto from "../assets/project-images/Skatebubbles_MDIA1165_FINALproject.jpg";
import madonnaIllus from "../assets/Madonna_Design_SoleEsnaola_Assignment01.jpg";

const MyProjects = [
  {
    id: 1,
    title: "Locamotion",
    projectType: "Brand Design",
    shortDescription: "Little description about this project",
    projectImage: locamotionLogo,
  },
  {
    id: 2,
    title: "Maruki Wines",
    projectType: "Logo/Brand Design",
    shortDescription: "Little description about this project",
    projectImage: marukiLogo,
  },
  {
    id: 3,
    title: "Baza Dance Studio",
    projectType: "UXUI",
    shortDescription: "Little description about this project",
    projectImage: bazaWireframes,
  },
  {
    id: 4,
    title: "Rollerskate Bubbles",
    projectType: "Photography",
    shortDescription: "Little description about this project",
    projectImage: rollerskatePhoto,
  },
  {
    id: 5,
    title: "Madonna",
    projectType: "Illustration",
    shortDescription: "Little description about this project",
    projectImage: madonnaIllus,
  },
  
];

function Projects() {
  const [projects] = useState(MyProjects);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id]
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">My Projects</h1>
      
      {/* Grid Layout for Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
