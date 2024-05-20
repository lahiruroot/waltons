import React from 'react';
import './hadder.css';
import bgdr from '../../assets/bgdr.png';

const Heroscreen = () => {
  return (
    <section id="home" class="hero-section">
    <div class="hero-content">
      <h1>Welcome to Waltons</h1>
      <p>Transforming Spaces with Innovative Designs</p>
      <button class="hero-button">Learn More</button>
    </div>
    <div class="hero-image">
    <img src={bgdr} alt="Waltons Logo " className="bgdr-img" />
    </div>
  </section>
  

  );
};

export default Heroscreen;



