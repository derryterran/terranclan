import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle mobile menu toggle
  const toggleNav = () => {
    setIsActive(!isActive);
  };

  // Close mobile menu when clicking on a link
  const closeNav = () => {
    setIsActive(false);
  };

  // Add scroll event listener to change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav>
        <div className="logo">
          <img src="./dt.png" alt="Derry Liandana" className="logo-image" />
        </div>
        <ul className={`nav-links ${isActive ? 'active' : ''}`}>
          <li><a href="#about" onClick={closeNav}>About</a></li>
          <li><a href="#competencies" onClick={closeNav}>Competencies</a></li>
          <li><a href="#experience" onClick={closeNav}>Experience</a></li>
          <li><a href="#tech-stack" onClick={closeNav}>Tech Stack</a></li>
          <li><a href="#education" onClick={closeNav}>Education</a></li>
          <li><a href="#contact" onClick={closeNav}>Contact</a></li>
        </ul>
        <div 
          className={`burger ${isActive ? 'toggle' : ''}`} 
          onClick={toggleNav}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;