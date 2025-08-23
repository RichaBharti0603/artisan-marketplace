import React from "react";
import { useParams, Link } from "react-router-dom";
import { ARTISANS } from "../data/artisans";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const item = ARTISANS.find((a) => a.id === id);

  if (!item) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Product not found</h2>
        <Link to="/marketplace">Back to marketplace</Link>
      </div>
    );
  }

  return (
    <div className="product">
      <img src={item.image} alt={item.craft} />
      <div className="meta">
        <h2>{item.craft}</h2>
        <p className="byline">By {item.name} • {item.region}</p>
        <p className="story">{item.story}</p>
        <p><strong>Materials:</strong> {item.materials}</p>
        <p><strong>In stock:</strong> {item.stock}</p>
        <p className="price">₹{item.price}</p>
        <div className="actions">
          <button>Contact Artisan</button>
          <button>Add to Cart</button>
        </div>
        <Link to="/stories" className="link-stories">Read more artisan stories →</Link>
      </div>
    </div>
  );
}
