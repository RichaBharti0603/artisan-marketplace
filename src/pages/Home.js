import React from "react";
import Hero from "../components/Hero";
import Stories from "./Stories"; // can use a preview, or full page if you want
import Marketplace from "./Marketplace"; // maybe preview of few items
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Features / Mission Section */}
      <section className="features-section">
        <h2>Empowering Indian Artisans</h2>
        <p>
          Our AI-powered platform helps artisans tell their stories, showcase 
          their crafts, and reach global audiences. By blending tradition with 
          technology, we ensure sustainability for centuries-old art forms.
        </p>
      </section>

      {/* Stories Section Preview */}
      <section className="stories-preview">
        <h2>Stories of Our Artisans</h2>
        <p>Discover the journey, heritage, and inspiration behind every craft.</p>
        <Stories /> {/* You can show limited items here */}
      </section>

      {/* Marketplace Section Preview */}
      <section className="marketplace-preview">
        <h2>Featured Crafts</h2>
        <p>Shop unique handmade items directly from artisans.</p>
        <Marketplace /> {/* Show a few featured products */}
      </section>

      {/* Call To Action */}
      <section className="cta">
        <h2>Join the Movement</h2>
        <p>Support artisans, preserve culture, and bring authentic crafts home.</p>
        <a href="/onboard" className="btn">Get Started</a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
