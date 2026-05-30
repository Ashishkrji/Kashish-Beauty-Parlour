import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Bridal from "./pages/Bridal";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Book from "./pages/Book";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="bridal" element={<Bridal />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
