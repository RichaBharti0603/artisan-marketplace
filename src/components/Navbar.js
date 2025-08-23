import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // make sure you have styling here

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">KalaSetu</Link>
      </div>

      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
        <li><Link to="/stories">Stories</Link></li>
        <li><Link to="/onboard">Onboard</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
