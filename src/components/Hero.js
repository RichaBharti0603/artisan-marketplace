import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Discover India’s Artisans</h1>
        <p className="hero-subtitle">
          Handcrafted treasures, straight from the heart of local creators.
        </p>
        <button className="hero-btn">Explore Now</button>
      </div>
    </section>
  );
}

export default Hero;
