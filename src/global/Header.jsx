import {Link} from "react-router";
import "./Header.css";

import logo from "../assets/logo.jpeg";

function Header() {
  
    
    return(
        <>
            <header className="site-header">
                <div className="container">
                    <div className="flex">
                        <div className="col-3">
                        <img src={logo} className="site-header__logo" alt="Logo" />
                        </div>
                        <div className="col-9">
                            <ul>
                                <li> <Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects" >Project</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
               
            </header>
        </>
    )
}

export default Header;