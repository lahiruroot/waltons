import React, { useState } from 'react';
import './navbar.css';
import './navimg.css';
import logo from '../../assets/logo1.png';
import navimage from '../../assets/waltons.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeNav();
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1></h1>
          <img src={logo} alt="Waltons Logo " className="logo-img" />
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
              <li className='nav-item'><a href="#home" onClick={() => scrollToSection('home')} className="underline-on-hover"><i className="fas fa-home icon"></i>HOME</a></li>
              <li className='nav-item'><a href="#who-we-are" onClick={() => scrollToSection('who-we-are')} className="underline-on-hover"><i className="fas fa-users icon"></i>WHO WE ARE</a></li>
              <li className='nav-item'><a href="#about" onClick={() => scrollToSection('about')} className="underline-on-hover"><i className="fas fa-building icon"></i>PROPERTIES</a></li>
              <li className='nav-item'><a href="#commercial" onClick={() => scrollToSection('commercial')} className="underline-on-hover"><i className="fas fa-briefcase icon"></i>COMMERCIAL</a></li>
              <li className='nav-item'><a href="#projects" onClick={() => scrollToSection('projects')} className="underline-on-hover"><i className="fas fa-project-diagram icon"></i>PROJECT'S</a></li>
              <li className='nav-item'><a href="#contact" onClick={() => scrollToSection('contact')} className="underline-on-hover"> <i className="fas fa-envelope icon"></i>CONTACT</a></li>
            </ul>
          </div>
          <div className="overlay-info">
            <img src={navimage} alt="Waltons Logo " className="nav-img" />
            {/* <p>Your description text goes here. This is a place where you can add some information about your company or the content of the navigation links.</p> */}
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
        </button>
      </div>
      {!isOpen && (
        <div className="hero-screen">
          {/* Your hero screen content here */}
        </div>
      )}
    </>
  );
};

export default Navbar;
