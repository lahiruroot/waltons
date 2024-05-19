import React, { useState } from 'react';
import './navbar.css';
import Heroscreen from '../hadder/hadder';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
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
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
        <ul className="overlay-content">
          <li><a href="#home">HOME</a></li>
          <li><a href="#projects">WHO WE ARE</a></li>
          <li><a href="#about">PROPERTIES</a></li>
          <li><a href="#commercial">COMMERCIAL</a></li>
          <li><a href="#projects">PROJECT'S</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
      {/* Conditionally render hero screen based on isOpen */}
      {!isOpen && (
        <div className="hero-screen">
          <Heroscreen />
        </div>
      )}
    </>
  );
};

export default Navbar;
