import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Toggle navigation menu
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  
  // Handle scroll event to add scrolled class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close nav when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  
  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <a href="#surface" className="logo">
        <i className="fas fa-water"></i>SN
      </a>

      <button 
        className="nav-toggle" 
        aria-label="toggle navigation"
        onClick={toggleNav}
      >
        <span className="hamburger"></span>
      </button>

      <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#surface" className="nav__link" onClick={handleLinkClick}>
              Surface
            </a>
          </li>
          <li className="nav__item">
            <a href="#shallow" className="nav__link" onClick={handleLinkClick}>
              Shallow
            </a>
          </li>
          <li className="nav__item">
            <a href="#moderate" className="nav__link" onClick={handleLinkClick}>
              Moderate
            </a>
          </li>
          <li className="nav__item">
            <a href="#deep" className="nav__link" onClick={handleLinkClick}>
              Deep
            </a>
          </li>
          <li className="nav__item">
            <a href="#abyss" className="nav__link" onClick={handleLinkClick}>
              Abyss
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;