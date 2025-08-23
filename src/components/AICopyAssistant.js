import React, { useState } from "react";
import "./AICopyAssistant.css";

export default function AICopyAssistant({ onApplyDescription, onApplyCaption }) {
  const [materials, setMaterials] = useState("");
  const [motifs, setMotifs] = useState("");
  const [region, setRegion] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [tone, setTone] = useState("Warm & Cultural");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({ description: "", caption: "" });

  const generate = async () => {
    setLoading(true);

    // MOCK result for now. Later call your backend: /api/generateCopy
    const description =
      `This ${materials || "handcrafted piece"} from ${region || "India"} showcases ${motifs || "traditional motifs"}—a tribute to living heritage. ` +
      `Crafted with care, inspired by ${inspiration || "local folklore"}, it brings warmth, story, and authenticity to modern homes.`;
    const caption =
      `Crafted with soul ✨ ${region || "Indian"} ${materials || "artisan work"} with ${motifs || "timeless motifs"}. ` +
      `#SupportArtisans #Handmade #${region || "India"} #Craft #Heritage`;

    // simulate small delay
    setTimeout(() => {
      setResult({ description, caption });
      setLoading(false);
    }, 600);
  };

  return (
    <div className="ai-box">
      <div className="ai-head">AI Copy Assistant</div>

      <div className="ai-grid">
        <label>
          Materials
          <input value={materials} onChange={(e) => setMaterials(e.target.value)} placeholder="e.g., natural dyes on handmade paper" />
        </label>
        <label>
          Motifs/Style
          <input value={motifs} onChange={(e) => setMotifs(e.target.value)} placeholder="e.g., peacocks, fish, flora" />
        </label>
        <label>
          Region
          <input value={region} onChange={(e) => setRegion(e.target.value)} placeholder="e.g., Madhubani, Bihar" />
        </label>
        <label>
          Inspiration / Story Seeds
          <input value={inspiration} onChange={(e) => setInspiration(e.target.value)} placeholder="e.g., wedding rituals, local folklore" />
        </label>
        <label>
          Tone
          <select value={tone} onChange={(e) => setTone(e.target.value)}>
            <option>Warm & Cultural</option>
            <option>Minimal & Modern</option>
            <option>Premium & Luxe</option>
            <option>Festive & Cheerful</option>
          </select>
        </label>
      </div>

      <button className="ai-btn" onClick={generate} disabled={loading}>
        {loading ? "Generating…" : "Generate with AI"}
      </button>

      <div className="ai-output">
        <div>
          <div className="ai-subhead">Suggested Description</div>
          <textarea value={result.description} onChange={(e) => setResult(r => ({ ...r, description: e.target.value }))} rows={5} />
          <button className="ai-apply" onClick={() => onApplyDescription?.(result.description)} disabled={!result.description}>
            Insert into form
          </button>
        </div>
        <div>
          <div className="ai-subhead">Social Caption</div>
          <textarea value={result.caption} onChange={(e) => setResult(r => ({ ...r, caption: e.target.value }))} rows={4} />
          <button className="ai-apply" onClick={() => onApplyCaption?.(result.caption)} disabled={!result.caption}>
            Copy / Use caption
          </button>
        </div>
      </div>
    </div>
  );
}
