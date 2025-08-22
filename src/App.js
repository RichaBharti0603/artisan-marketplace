import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Marketplace from "./pages/Marketplace";
import LoginSignup from "./pages/LoginSignup";
import Chatbot from "./components/Chatbot";
import Onboard from "./pages/Onboard";
import Stories from "./pages/Stories";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/onboard" element={<Onboard />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Chatbot />
      <Footer />
    </Router>
  );
}
