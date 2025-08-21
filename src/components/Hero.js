import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <header className="hero">
      <h2>Empowering Local Artisans with AI</h2>
      <p>Discover unique handmade crafts and learn the stories behind them.</p>
      <button onClick={() => navigate("/marketplace")}>
        Explore Marketplace
      </button>
    </header>
  );
}

export default Hero;
