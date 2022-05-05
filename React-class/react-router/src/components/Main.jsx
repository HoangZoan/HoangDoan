import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import About from "../pages/About";
import MainPage from "../pages/MainPage";
import News from "../pages/News";
import Contact from "../pages/Contact";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Main;
