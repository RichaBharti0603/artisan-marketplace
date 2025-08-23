import React, { useState } from "react";
import "./FloatingAssistant.css";

const FloatingAssistant = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="floating-chip" onClick={() => setOpen(!open)}>
        💬 AI Assistant
      </div>

      {open && (
        <div className="assistant-popup">
          <div className="assistant-header">
            <h4>Marketplace Assistant</h4>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>
          <div className="assistant-body">
            <p>Hi! I’m here to help you explore crafts, artisans, and stories. What would you like to know?</p>
            {/* Later we can connect this to Google Cloud’s Generative AI */}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAssistant;
