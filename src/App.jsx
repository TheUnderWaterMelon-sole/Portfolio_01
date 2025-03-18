// App.jsx
import React from "react";
import { Routes, Route } from "react-router";

import PageWrap from "./global/PageWrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"
import StyleGuide from "./pages/StyleGuide";

// styles
import "./css/reset.css";



function App() {
  return (
   
      <Routes>  
        <Route path="/" element={<PageWrap />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="style-guide" element={<StyleGuide />} />
        </Route>
       
      </Routes> 
     
   
  );
}

export default App;
