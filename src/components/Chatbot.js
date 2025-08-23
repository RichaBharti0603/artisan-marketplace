import React, { useState } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="chatbot-container">
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>AI Marketplace Assistant</h4>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>
          <div className="chat-body">
            <p>Hello! 👋 I can help artisans share their stories & products.</p>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type your question..." />
            <button>Send</button>
          </div>
        </div>
      )}
      <button className="chatbot-button" onClick={() => setOpen(!open)}>
        💬
      </button>
    </div>
  );
}
