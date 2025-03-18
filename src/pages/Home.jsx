// import Header from "../global/Header";
// import Footer from "../global/Footer";
import homeBanner from "../assets/homeBanner.jpg";

import "./Home.css";

function Home() {
    return(
        
        <main className="home">      
            <div className="container hero" id="MY_HOME_PAGE">
                <div className="hero grid vertical-center">
                    <div className="hero-image col-12 col-12-lg">
                        <img src={homeBanner} alt="red boat floating on calm green water" />    
              
                    </div>
                    <div className="flex-column col-12 col-6-lg">
                        <h2 className="h1"> Welcome to my website</h2>
                        <h1 className="h2" >I am UXUI and Brand designer based in Vancouver </h1>
                    </div>
                </div>
            </div>
           
          <section className="container content">
            <h3>Section Title</h3>
            <h4>Brief Description</h4>
            <div className="image-gallery">
           
            </div>

          </section>
         </main>
           
        
    )
}

export default Home;