import React from "react";
import { ARTISANS } from "../data/artisans";
import "./Stories.css";

export default function Stories() {
  return (
    <div className="stories">
      <h2>Artisan Stories</h2>
      <div className="sgrid">
        {ARTISANS.map((a) => (
          <article key={a.id} className="story-card">
            <img src={a.image} alt={a.craft} />
            <div>
              <h3>{a.craft} • {a.region}</h3>
              <p className="by">By {a.name}</p>
              <p>{a.story}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
