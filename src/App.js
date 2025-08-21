import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">ArtisanAI</h1>
        <ul>
          <li>Home</li>
          <li>Marketplace</li>
          <li>Stories</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h2>Empowering Local Artisans with AI</h2>
        <p>
          Discover unique handmade crafts and learn the stories behind them.
        </p>
        <button>Explore Marketplace</button>
      </header>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 ArtisanAI - Preserving Tradition, Empowering the Future</p>
      </footer>
    </div>
  );
}

export default App;
