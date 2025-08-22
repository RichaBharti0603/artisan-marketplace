import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">ArtisanAI</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
        <li><Link to="/stories">Stories</Link></li>
        <li><Link to="/about">About</Link></li>
         <li><a href="/login">Login / Signup</a></li> {/* ✅ New link */}
          <li><a href="/onboard">Onboard Artisan</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
