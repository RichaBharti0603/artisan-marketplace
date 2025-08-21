import React from "react";
import ArtisanCard from "../components/ArtisanCard";
import "./Marketplace.css";

// Import images properly
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";

const artisans = [
  {
    name: "Ramesh Kumar",
    craft: "Madhubani Painting",
    story: "Carrying forward a 500-year-old tradition of Bihar art.",
    image: img1,
    price: 2500,
  },
  {
    name: "Sita Devi",
    craft: "Terracotta Pottery",
    story: "Sculpting clay with love from West Bengal.",
    image: img3,
    price: 1200,
  },
  {
    name: "Imran Khan",
    craft: "Handwoven Carpets",
    story: "Crafting Kashmiri carpets with intricate detail.",
    image: img2,
    price: 5000,
  },
];

function Marketplace() {
  return (
    <div className="marketplace">
      <h2>Discover Local Artisans</h2>
      <div className="grid">
        {artisans.map((artisan, index) => (
          <ArtisanCard key={index} {...artisan} />
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
