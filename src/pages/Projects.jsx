// Projects.jsx
import React, { useState } from "react";
import ProjectCard from "../global/ProjectCard";

import "../main.css";
import "../css/project.css"

// images
import locamotionLogo from "../assets/project-images/p1-LOCAMOTION_LogoLaunch._sqr.png";
import bazaWireframes from "../assets/project-images/p2-Baza_project_slides3.18 AM.png";
import marukiLogo from "../assets/project-images/Maruki_logos_b_W_600x400.png";
import rollerskatePhoto from "../assets/project-images/Skatebubbles_MDIA1165_FINALproject.jpg";
import madonnaIllus from "../assets/Madonna_Design_SoleEsnaola_Assignment01.jpg";
import { HeartOff } from "lucide-react";

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
    <>
    <header className="hero">
      <h1 className="h1 text-center py-24">My Projects</h1>
    </header>
    <main className="projects px-24">      
    <div className="projects-container grid">
      {projects.map((project) => (
        <div key={project.id} className="card col-4">
          <ProjectCard
            project={project}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
          </div>
        ))}
      </div>
    </main>
    </>
  );
}

export default Projects;
