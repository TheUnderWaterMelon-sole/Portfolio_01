//ProjectCards.jsx
import React from 'react';
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const projectCards = ({ project, favorites, toggleFavorite }) => {
    return (
        <div className="p-3 bg-neutral-200 border-2 border-gray-800 rounded-lg shadow-md overflow-hidden transform">
            <img src={project.artworkUrl} className="w-full h-fit object-cover" alt={`${project.title} cover`} />
            <div className="p-2">
                <p className="text-black font-semibold py-4">{project.title} </p>
                <p className="text-black italic py-4"> by {project.publisher}</p>
                <p className ="text-black font-semibold pb-4">${project.price.toFixed(2)}</p>
                <button className="text-red-400" onClick={() => toggleFavorite(project.id)}>
                    {favorites.includes(project.id) ? <IoHeart /> : <IoHeartOutline />}
                </button>
                
            </div>
        </div>
    );
};

export default projects;
