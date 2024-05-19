import React from 'react'
import './hadder.css'

function Heroscreen() {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Discover Modern Architecture</h1>
        <p>Innovative designs that inspire and elevate.</p>
        <button className="hero-button">Explore More</button>
      </div>
    </div>
  )
}

export default Heroscreen