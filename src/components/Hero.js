import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Authentic Indian Crafts</h1>
        <p>Empowering artisans by connecting tradition with modern digital reach.</p>
        <button onClick={() => navigate("/marketplace")}>
          Explore Marketplace
        </button>
      </div>
    </section>
  );
};

export default Hero;
