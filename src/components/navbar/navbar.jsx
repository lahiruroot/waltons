import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>Waltons</h1>
        </div>
        <div className="navbar-toggle" onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <div className={`overlay ${isOpen ? 'open' : ''}`}>
        <div className="overlay-content-wrapper">
          <div className="overlay-content">
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#projects">WHO WE ARE</a></li>
              <li><a href="#about">PROPERTIES</a></li>
              <li><a href="#commercial">COMMERCIAL</a></li>
              <li><a href="#projects">PROJECT'S</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
          <div className="overlay-info">
            <img src="your-image-url.jpg" alt="Description of the image" />
            <p>Your description text goes here. This is a place where you can add some information about your company or the content of the navigation links.</p>
          </div>
        </div>
        <button className="close-button" onClick={closeNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#ffffff"
          >
            <path d="M19.71 4.29a1 1 0 00-1.42 0L12 10.59 5.71 4.29a1 1 0 00-1.42 1.42L10.59 12l-6.3 6.29a1 1 0 101.42 1.42L12 13.41l6.29 6.3a1 1 0 001.42-1.42L13.41 12l6.3-6.29a1 1 0 000-1.42z" />
          </svg>
        </button>      </div>
      {!isOpen && (
        <div className="hero-screen">
        
        </div>
      )}
    </>
  );
};

export default Navbar;
