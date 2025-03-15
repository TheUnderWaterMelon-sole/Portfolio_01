// global/Navbar.jsx

import React from "react";
import { Link } from "react-router";
import { stack as Menu } from 'react-burger-menu';

// style
import "../css/menu.css";



function Navbar() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu pageWrapId='page-wrap' outerContainerId='outer-container'>

        <Link className="menu-item" to="/">Home</Link>
        <Link className="menu-item" to="/about">About</Link>
        <Link className="menu-item" to="/projects">Projects</Link>
      </Menu>
    );
  };

export default Navbar;