// src/components/HomeSection.jsx
import React from 'react';
import './home.css';

const HomeSection = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1>Welcome to ArchDesign</h1>
        <p>Transforming Spaces with Innovative Designs</p>
        <button className="home-button">Learn More</button>
      </div>
      <div className="home-image">
        <img src="/path/to/your/architecture-image.jpg" alt="Architecture Design" />
      </div>
    </section>
  );
};

export default HomeSection;
