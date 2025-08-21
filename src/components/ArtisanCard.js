// src/components/ArtisanCard.js
import React from "react";
import "./ArtisanCard.css";

export default function ArtisanCard({ name, craft, story, image, price }) {
  return (
    <div className="artisan-card">
      <img src={image} alt={craft} className="artisan-img" />
      <h3>{craft}</h3>
      <p className="craft-by">By {name}</p>
      <p className="story">{story}</p>
      <p className="price">₹{price}</p>
      <button className="buy-btn">View</button>
    </div>
  );
}
