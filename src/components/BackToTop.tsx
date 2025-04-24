import React, { useState, useEffect } from 'react';
import '../styles/BackToTop.css';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Function to show/hide the back to top button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <a 
      href="#surface" 
      className={`back-to-top ${visible ? 'show' : ''}`} 
      aria-label="Back to top"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <i className="fas fa-arrow-up"></i>
    </a>
  );
};

export default BackToTop;