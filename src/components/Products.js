// src/components/Products.js
import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <section className="products">
      <h2>Featured Products</h2>
      <div className="product-list">
        <div className="product-card">Handcrafted Pottery</div>
        <div className="product-card">Traditional Textiles</div>
        <div className="product-card">Jewelry</div>
      </div>
    </section>
  );
};

export default Products;
