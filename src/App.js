import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Competencies from './components/Competencies';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Apply dark mode if saved in localStorage
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }

    return () => clearTimeout(timer);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark-theme');
    } else {
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark-theme');
    }
  };

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Competencies />
            <Experience />
            <TechStack />
            <Education />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
          <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode} />
        </>
      )}
    </div>
  );
}

export default App;