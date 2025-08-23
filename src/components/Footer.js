import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 KalaKriti | Celebrating Local Artisans</p>
        <div className="footer-links">
          <a href="/stories">Stories</a>
          <a href="/marketplace">Marketplace</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </footer>
  );
}
