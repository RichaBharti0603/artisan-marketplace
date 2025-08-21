import React, { useMemo, useState } from "react";
import ArtisanCard from "../components/ArtisanCard";
import "./Marketplace.css";
import { ARTISANS, CATEGORIES, REGIONS } from "../data/artisans";
import { Link } from "react-router-dom";

export default function Marketplace() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [region, setRegion] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");

  const filtered = useMemo(() => {
    return ARTISANS.filter((a) => {
      const qMatch =
        !q ||
        a.name.toLowerCase().includes(q.toLowerCase()) ||
        a.craft.toLowerCase().includes(q.toLowerCase()) ||
        a.tags.join(" ").toLowerCase().includes(q.toLowerCase());
      const cMatch = cat === "All" || a.craft.toLowerCase().includes(cat.toLowerCase());
      const rMatch = region === "All" || a.region === region;
      const pMatch = !maxPrice || a.price <= Number(maxPrice);
      return qMatch && cMatch && rMatch && pMatch;
    });
  }, [q, cat, region, maxPrice]);

  return (
    <div className="marketplace">
      <h2>Discover Local Artisans</h2>

      <div className="filters">
        <input
          placeholder="Search craft, tags or artisan..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select value={cat} onChange={(e) => setCat(e.target.value)}>
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          {REGIONS.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
        <input
          type="number"
          min="0"
          placeholder="Max Price (₹)"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <Link to="/onboard" className="cta-onboard">+ List your craft</Link>
      </div>

      <div className="grid">
        {filtered.map((a) => (
          <Link key={a.id} to={`/product/${a.id}`} className="card-link">
            <ArtisanCard {...a} />
          </Link>
        ))}
        {filtered.length === 0 && <p>No items match your filters.</p>}
      </div>
    </div>
  );
}
