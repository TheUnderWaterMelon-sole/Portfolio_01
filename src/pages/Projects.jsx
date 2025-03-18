// Projects.jsx
import React, { useState } from "react";
import ProjectCard from "../global/ProjectCard";

import ProjectBanner from "../assets/ProjectBanner.jpg"

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
    shortDescription: "Lcoamotion is all about inclusivity, empowerment, and joy. With a strong foundation in values like respect and fun, Locamotion is a welcoming hub for everyone",
    projectImage: locamotionLogo,
  },
  {
    id: 2,
    title: "Maruki Wines",
    projectType: "Logo/Brand Design",
    shortDescription:"The goal was To Design a logo and choose colors and typography for a Japanese wine brand named Maruki. As a designer, my goal was to capture the essence of the brand and reflect it in the logo, not only inthe visual aspects, but in the 'feeling' and 'personality'.",
    projectImage: marukiLogo,
  },
  {
    id: 3,
    title: "Baza Dance Studio",
    projectType: "UXUI",
    shortDescription: "LBaza is a dance studio in Vancouver focused on Latin dances. The goal was to figure out what is working and what isn’t on Baza Website and improve the information architecture and UI to create a better user experience, Reduce frustration and increases sales and navigation time",
    projectImage: bazaWireframes,
  },
  {
    id: 4,
    title: "Rollerskate Bubbles",
    projectType: "Photography",
    shortDescription: "I wanted to put together three of the things that I enjoy the most (the ocean, roller skating and photography) and create a final image with a magical realism. I created a photo composition of roller skates floating inside soap bubbles that looked realistic. Trying to put various elements together with a similar lighting, tone and texture",
    projectImage: rollerskatePhoto,
  },
  {
    id: 5,
    title: "Madonna",
    projectType: "Illustration",
    shortDescription: "",
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
        <div className="container hero grid vertical-center">
            <div className="hero-image col-12 col-8-lg">
                <img src={ProjectBanner} alt="red boat floating on calm green water" />    
            </div>
            <div className="flex-column col-12 col-4-lg pl-12">
                <h2 className="h1"> Projects</h2>
                <h1 className="h2">My projects, from brand design to UXUI and Photography </h1>
            </div>
        </div>
    </header>

    <main className="projects  mt-24 px-24"> 
    <div className="projects-container grid pt-12">
      <h2 className="col-12 text-center h1">My Projects</h2>
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
