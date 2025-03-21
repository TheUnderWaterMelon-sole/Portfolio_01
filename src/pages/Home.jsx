
import homeBanner from "../assets/homeBanner.jpg";

import "../css/Home.css";

function Home() {
    return(
        <>
        <hero className="container hero" id="MY_HOME_PAGE">
            <div className="hero grid vertical-center">
                <div className="hero-image col-12 col-8-lg">
                    <img src={homeBanner} alt="red boat floating on calm green water" />    
                </div>
                <div className="flex-column col-12 col-4-lg pl-12">
                    <h2 className="h1"> Welcome to my website</h2>
                    <h1 className="h2" >I am UXUI and Brand designer based in Vancouver </h1>
                </div>
            </div>
        </hero>

        <main className="home">      
          <section className="container content">
            <h3>Section Title</h3>
            <h4>Brief Description</h4>

            <div className="image-gallery">  
            </div>
          </section>
         </main>
    </>
        
    )
}

export default Home;