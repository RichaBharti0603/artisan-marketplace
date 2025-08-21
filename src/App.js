import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Marketplace from "./pages/Marketplace";
import LoginSignup from "./pages/LoginSignup";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;
