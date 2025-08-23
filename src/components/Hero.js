import React from "react";
import "./Hero.css"; // create this file for styling

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>KalaKriti</h1>
        <p>Empowering Artisans, Enriching Lives</p>
        
        <div className="hero-buttons">
          <a href="/onboard" className="btn-primary">Get Started</a>
          <a href="/marketplace" className="btn-secondary">Explore Marketplace</a>
        </div>
      </div>
    </section>
  );
}
