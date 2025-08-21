import React from "react";
import "./ArtisanCard.css";

function ArtisanCard({ name, craft, story, image, price }) {
  return (
    <div className="artisan-card">
      <img src={image} alt={name} className="artisan-img" />
      <h3>{name}</h3>
      <p className="craft">{craft}</p>
      <p className="story">{story}</p>
      <p className="price">₹{price}</p>
      <button className="buy-btn">View Product</button>
    </div>
  );
}

export default ArtisanCard;
