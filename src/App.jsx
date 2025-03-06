import {Routes, Route } from "react-router";

import PageWrap from "./global/PageWrap";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {

//Logic Area 


//HTML area
  return (
    <>
    <Routes>
      <Route path="/" element={ <PageWrap />}>
        <Route index element={<Home /> }></Route>
        <Route path='about' element={<About />}></Route>
      </Route>
    </Routes>
      
    </>
  );
}

export default App;
