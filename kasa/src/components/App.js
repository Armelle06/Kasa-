import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Home from "../pages/Home";
import About from "../pages/About";
//import pageError404 from "../pages/pageError404";

//import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
