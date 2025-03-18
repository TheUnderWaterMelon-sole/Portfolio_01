import "../main.css";
import "../css/About.css";

import AboutBanner from "../assets/AboutBanner.jpg";
import AboutMe from "../assets/AboutMe.png";

function About() {
    return(
        <>
        <header className="container hero" id="MY_HOME_PAGE">
            <div className="hero grid vertical-center">
                <div className="hero-image col-12 col-8-lg">
                    <img src={AboutBanner} alt="red boat floating on calm green water" />    
                </div>
                <div className="flex-column col-12 col-4-lg pl-12">
                    <h2 className="h1">About me</h2>
                    <h1 className="h2" >I am UXUI and Brand designer based in Vancouver </h1>
                </div>
            </div>
        </header>
    
        <div className="about-container grid col-12 m-24">
            <div className=" about-info flex-column pl-24 col-6">
                <h2 className="h2">About Me</h2>
                <h3 className="h3 ">Something something</h3>
                <p className="p pt-16">Born in South America, raised in Europe and adulting in Canada. The world is my oyster. I am a curious woman and passionate about many things in life. The ocean is my big love, followed closely playing sports, photograpphy and discovering places and cultures. But I would give up all of that for my nephews and niece.Marine Biologist, roller skater and designer, I have found a way in life to slowly bring together all the things in life that make me happy and grounded. I am very excited about my journey in the world of new media and looking forward to the experiences ahead of me.</p>
            </div>
            <div className="about-image flex col-6 pr-12">
                <img src={AboutMe} className="mb-4"/>
            </div>        
        </div>
        </>
    )
    

}

export default About;