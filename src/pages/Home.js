import React, { useEffect } from "react";
import Hero from "../components/Hero"; // your existing Hero (now sized nicely)
import "./Home.css";

export default function Home() {
  // Simple reveal-on-scroll without extra libraries
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="home">
      {/* HERO (already styled via Hero.css you added) */}
      <Hero />

      {/* Mission / Problem */}
      <section className="band band--light reveal">
        <div className="container">
          <h2>Bridging Tradition with Technology</h2>
          <p className="sub">
            Many Indian artisans lack digital tools to market their craft. Our
            AI-powered assistant helps them create stunning listings, craft
            compelling stories, and reach modern audiences—sustainably.
          </p>
          <div className="stats">
            <div className="stat">
              <span className="stat__num">500+</span>
              <span className="stat__label">Craft Traditions</span>
            </div>
            <div className="stat">
              <span className="stat__num">10K+</span>
              <span className="stat__label">Artisan Products</span>
            </div>
            <div className="stat">
              <span className="stat__num">80+</span>
              <span className="stat__label">Communities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="band reveal">
        <div className="container">
          <h2>What the AI Assistant Does</h2>
          <div className="features">
            <div className="feature">
              <div className="feature__icon">📝</div>
              <h3>Story Builder</h3>
              <p>
                Turn raw notes into engaging artisan stories, origin tales, and
                care instructions—instantly.
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon">📸</div>
              <h3>Smart Listings</h3>
              <p>
                Auto-generate titles, tags, and SEO-ready descriptions that
                match buyer intent.
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon">📣</div>
              <h3>Marketing Boost</h3>
              <p>
                Create social posts, reels captions, and WhatsApp copy tailored
                for festivals and trends.
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon">🌏</div>
              <h3>Global Reach</h3>
              <p>
                Translate listings and price suggestions for domestic & export
                audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* “How it works” */}
      <section className="band band--accent reveal">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step__num">1</div>
              <p>Onboard as an artisan with basic craft details & photos.</p>
            </div>
            <div className="step">
              <div className="step__num">2</div>
              <p>Let AI craft stories, listings, and marketing in your voice.</p>
            </div>
            <div className="step">
              <div className="step__num">3</div>
              <p>Publish, share, and sell—reach new audiences with ease.</p>
            </div>
          </div>
          <div className="ctaRow">
            <a href="/onboard" className="btn btn--primary">Onboard as Artisan</a>
            <a href="/marketplace" className="btn btn--ghost">Explore Marketplace</a>
          </div>
        </div>
      </section>

      {/* Featured Artisans (safe remote images to avoid path issues) */}
      <section className="band reveal">
        <div className="container">
          <h2>Featured Artisans</h2>
          <div className="grid">
            {[
              {
                name: "Ramesh Kumar",
                craft: "Madhubani Painting • Bihar",
                img:
                  "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Sita Devi",
                craft: "Terracotta • West Bengal",
                img:
                  "https://images.unsplash.com/photo-1600423115367-8c1a3f6a3a05?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Imran Khan",
                craft: "Handwoven Carpets • Kashmir",
                img:
                  "https://images.unsplash.com/photo-1582582621958-7d3e3f5b32f6?q=80&w=800&auto=format&fit=crop",
              },
            ].map((a, i) => (
              <article className="card" key={i}>
                <img className="card__img" src={a.img} alt={a.craft} />
                <div className="card__body">
                  <h3 className="card__title">{a.name}</h3>
                  <p className="card__meta">{a.craft}</p>
                  <a href="/marketplace" className="card__link">
                    View Works →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="band band--soft reveal">
        <div className="container">
          <h2>What Artisans Say</h2>
          <div className="quotes">
            <blockquote>
              “The AI wrote my product stories in minutes—orders doubled during
              Diwali!”
              <cite>— S. Devi, Terracotta Artisan</cite>
            </blockquote>
            <blockquote>
              “Pricing and tags were confusing before. Now I reach buyers in
              Delhi and Dubai.”
              <cite>— R. Kumar, Folk Painter</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="band band--deep reveal">
        <div className="container finalCTA">
          <h2>Preserve Heritage. Empower Livelihoods.</h2>
          <p>
            Join us in securing the future of India’s crafts with the power of
            generative AI.
          </p>
          <div className="ctaRow">
            <a href="/onboard" className="btn btn--primary">Get Started</a>
            <a href="/stories" className="btn btn--ghost">Read Stories</a>
          </div>
        </div>
      </section>
    </main>
  );
}
