import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ toggleTheme, darkMode }) => {
  return (
    <div 
      className="theme-toggle"
      onClick={toggleTheme}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
    </div>
  );
};

export default ThemeToggle;