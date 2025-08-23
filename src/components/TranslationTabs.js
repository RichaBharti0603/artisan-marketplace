import React, { useState } from "react";
import "./TranslationTabs.css";

const LANGS = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "bn", label: "Bengali" },
];

export default function TranslationTabs({ baseText, onChangeMap }) {
  const [active, setActive] = useState("en");
  const [map, setMap] = useState({ en: baseText || "", hi: "", bn: "" });

  const handleTranslateMock = () => {
    // MOCK translations for now
    const hi = baseText ? `HI: ${baseText}` : "";
    const bn = baseText ? `BN: ${baseText}` : "";
    const newMap = { ...map, hi, bn };
    setMap(newMap);
    onChangeMap?.(newMap);
  };

  const update = (code, val) => {
    const newMap = { ...map, [code]: val };
    setMap(newMap);
    onChangeMap?.(newMap);
  };

  return (
    <div className="ttabs">
      <div className="ttab-row">
        {LANGS.map(l => (
          <button key={l.code} className={`ttab ${active === l.code ? "active" : ""}`} onClick={() => setActive(l.code)}>
            {l.label}
          </button>
        ))}
        <button className="translate-btn" onClick={handleTranslateMock}>Auto-translate</button>
      </div>

      <textarea
        rows={4}
        value={map[active] || ""}
        onChange={(e) => update(active, e.target.value)}
        placeholder={`Write ${LANGS.find(l=>l.code===active)?.label} copy...`}
      />
    </div>
  );
}
