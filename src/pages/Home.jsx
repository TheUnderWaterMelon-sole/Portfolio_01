// import Header from "../global/Header";
// import Footer from "../global/Footer";
import homeBanner from "../assets/homeBanner.jpeg";

import "./Home.css";

function Home() {
    return(
        
        <main className="home">      
            <div className="container" id="MY_HOME_PAGE">
                <div className="hero grid vertical-center">
                    <div className=" col-12 col-6-lg">
                        <img src={homeBanner} alt="Woman surfingn in suset wave" />    
                        
                    </div>
                    <div className="col-12 col-4-lg">
                        <h1 className="h1 "> Welcome to my website</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, enim! Adipisci officia exercitationem odio provident.</p>
                    </div>

                </div>
            </div>
           
         </main>
           
        
    )
}

export default Home;