import {Routes, Route } from "react-router";
import React, {useState} from "react";

import PageWrap from "./global/PageWrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"
import StyleGuide from "./pages/StyleGuide";


function App() {

//Logic Area 


//HTML area
  return (
    <>
    <Routes>
      <Route path="/" element={ <PageWrap />}>
        <Route index element={<Home /> }></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='projects' element={<Projects />}></Route>
        <Route path='style-guide' element={<StyleGuide />}></Route>
      </Route>
    </Routes>
      
    </>
  );
}

export default App;
