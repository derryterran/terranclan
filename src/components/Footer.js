import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container">
        <p>&copy; {currentYear} Derry Liandana. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#competencies">Competencies</a>
          <a href="#experience">Experience</a>
          <a href="#tech-stack">Tech Stack</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;