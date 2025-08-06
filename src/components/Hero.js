import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [scanComplete, setScanComplete] = useState(false);
  const fullText = 'Derry Liandana';
  
  // Starcraft-inspired scanning effect
  useEffect(() => {
    // First phase: character-by-character reveal
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 120);
      
      return () => clearTimeout(timeout);
    } 
    // Second phase: activate the full starcraft effect
    else if (!scanComplete) {
      const timeout = setTimeout(() => {
        setScanComplete(true);
      }, 500);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText, scanComplete]);

  return (
    <section id="hero">
      <div className="container">
        <div className="starcraft-container">
          <h1 className={`starcraft-name ${scanComplete ? 'scan-complete' : ''}`} data-text={fullText}>
            {typedText}
            {typedText.length < fullText.length && <span className="cursor">|</span>}
          </h1>
          {scanComplete && <div className="scan-line"></div>}
        </div>
        <h2>Principal Engineer | Software Architect | Integration Expert</h2>
        <div className="cta-buttons">
          <a href="#contact" className="btn primary">Get in Touch</a>
          <a href="#about" className="btn secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;