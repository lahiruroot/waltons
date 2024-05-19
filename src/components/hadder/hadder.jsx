import React from 'react';
import './hadder.css';

const Heroscreen = () => {
  return (
    <header className="fixed-header">
      <div className="hero-container">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover Modern Architecture</h1>
          <p>Innovative designs that inspire and elevate.</p>
          <button className="hero-button">Explore More</button>
        </div>
      </div>
    </header>


  );
};

export default Heroscreen;



