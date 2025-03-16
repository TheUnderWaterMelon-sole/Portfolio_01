import {Link} from "react-router";
import "../main.css";

// images
import soleLogo from "../assets/sole-logo.png";

function Footer() {
    return(
    <>
        <footer className="site-footer">
            <div className="container">
                <div className="grid p-24">
                    <div className="col-2">
                        <img src={soleLogo} className="site-footer__logo" alt="sole esnaola logo" />
                    </div>
              
                   
                    <div className="footer-nav flex col-10 horizontal-end h3">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects" >Project</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 pt-8 h5">
                        <div className="footer-terms">
                            <span className="h3">My Brand</span>
                            <span className="h3">&copy; 2023 My Brand</span>
                            <br></br>
                            <a href="#" className="terms-link">Terms and Conditions</a>
                            <a href="#" className="terms-link">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
          
        </footer>
    </>
    )
}

export default Footer;