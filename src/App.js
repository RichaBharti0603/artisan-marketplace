import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Marketplace from "./pages/Marketplace";
import LoginSignup from "./pages/LoginSignup";
import Onboard from "./pages/Onboard";
import Stories from "./pages/Stories";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Chatbot from "./components/Chatbot"; // floating assistant

function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/onboard" element={<Onboard />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      {/* Only show assistant on homepage */}
      {location.pathname === "/" && <Chatbot />}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
