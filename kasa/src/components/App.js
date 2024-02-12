import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import PageError from "../pages/PageError";

//import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
