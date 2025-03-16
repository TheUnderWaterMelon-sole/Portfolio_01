import {Link} from "react-router";
import "../css/Header.css";

import logo from "../assets/logo.jpeg";

function Header() {
  
    
    return(
        <>
            <header className="site-header">
                <div className="container">
                    <div className="grid vertical-center">
                        <div className="col-3">
                        <img src={logo} className="site-header__logo" alt="Logo" />
                        </div>
                        <div className="col-9">
                            <ul>
                                <li> <Link to="/" className="nav-link h3">Home</Link></li>
                                <li><Link to="/about" className="nav-link">About</Link></li>
                                <li><Link to="/projects" className="nav-link">Project</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
               
            </header>
        </>
    )
}

export default Header;