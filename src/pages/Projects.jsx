import React, { useState } from 'react';
import IonIcon from '@reacticons/ionicons';

const MyProjects = [
    {
        id: 1,
        title: "Brotato",
        publisher: "Blobfish",
        price: 19.99,
        artworkUrl: "https://m.media-amazon.com/images/M/MV5BOWY4MWY2NGQtNzNmYS00N2Y3LWIyYzItZjYwODFkODIwMmI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: 2,
        title: "Minecraft",
        publisher: "Mojang Studios & Xbox Games",
        price: 22.99,
        artworkUrl: "https://preview.redd.it/went-on-blender-i-made-a-minecraft-poster-v0-8b15yijpcgtc1.png?auto=webp&s=8482143e56f0bd1992defd259ed01ddf7dd016b7"
    },
    {
        id: 3,
        title: "Mario Bros",
        publisher: "Nintendo",
        price: 24.99,
        artworkUrl: "https://upload.wikimedia.org/wikipedia/en/4/4e/Mariobrothers.png"
    },
    {
        id: 4,
        title: "Sonic The Hedgehog, 2006",
        publisher: "Sega",
        price: 20.99,
        artworkUrl: "https://upload.wikimedia.org/wikipedia/en/d/d1/Sonic_the_Hedgehog_Next-Gen_Box_Art.JPG"
    },
    {
        id: 5,
        title: "Legend Of Zelda",
        publisher: "Nintendo",
        price: 22.99,
        artworkUrl: "https://howlongtobeat.com/games/10035_The_Legend_of_Zelda_Ocarina_of_Time.png"
    },
    {
        id: 6,
        title: "NBA Jam, 1993",
        publisher: "Midway",
        price: 24.99,
        artworkUrl: "https://i.ebayimg.com/images/g/TaUAAOSwXgljN7BL/s-l400.jpg"
    }
];
function Projects() {

    const [projects, setProjects] = useState(MyProjects);
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {

        if(favorites.includes(id)) {
            setFavorites(favorites.filter(favId => favId !== id));
        } else {
            setFavorites([...favorites, id]);
        }

    };

    return (
        <>
            <div className="container">
                <div className="grid grid grid-cols-12">
                    <div className="grid-cols-12">
                        <h1>My Projects</h1>
                    </div>
                </div>
            </div>
        
        </>
    )


}

export default Projects;