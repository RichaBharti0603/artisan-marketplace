import React, { useEffect, useState } from "react";
import "./AutoTagSuggester.css";

export default function AutoTagSuggester({ imagePreview, onChange }) {
  const [suggested, setSuggested] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (!imagePreview) return;
    // MOCK: later call /api/analyzeImage with the uploaded file/url
    // Here we just guess by filename keywords:
    const lower = imagePreview.toLowerCase();
    const pool = [
      "handmade","heritage","painting","pottery","textile","madhubani","terracotta","weaving","natural-dyes","folk-art"
    ];
    const picks = pool.filter(p => lower.includes("paint") ? ["painting","folk-art","natural-dyes"].includes(p)
                    : lower.includes("carpet") ? ["textile","weaving","heritage"].includes(p)
                    : lower.includes("pot") ? ["pottery","terracotta","handmade"].includes(p)
                    : ["handmade","heritage"]).slice(0,4);
    setSuggested(picks);
    setSelected(picks.slice(0,2));
  }, [imagePreview]);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  const toggle = (tag) =>
    setSelected((curr) => (curr.includes(tag) ? curr.filter(t => t !== tag) : [...curr, tag]));

  if (!imagePreview) return null;

  return (
    <div className="tags-box">
      <div className="tags-head">Suggested Tags</div>
      <div className="tags-grid">
        {suggested.map((t) => (
          <button key={t} className={`tag ${selected.includes(t) ? "active" : ""}`} onClick={() => toggle(t)}>
            #{t}
          </button>
        ))}
      </div>
    </div>
  );
}
