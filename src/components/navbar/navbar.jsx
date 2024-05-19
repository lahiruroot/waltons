import React,{ useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
    <div className="navbar-logo">
      <h1>ArchDesign</h1>
    </div>
    <div className="navbar-toggle" onClick={toggleNav}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
    <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
      <li><a href="#home">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  )
}

export default Navbar