import React, { useState, useEffect } from 'react';
import '../styles/DepthMarker.css';

const DepthMarker: React.FC = () => {
  const [fillPercentage, setFillPercentage] = useState(0);
  const [currentDepth, setCurrentDepth] = useState('surface');
  
  useEffect(() => {
    // Function to update the depth marker based on scroll position
    const updateDepthMarker = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      // Calculate scroll percentage
      const scrollPercent = Math.min(scrollTop / (documentHeight - windowHeight), 1);
      
      // Determine current depth and fill percentage
      let newFillPercentage;
      let newDepth;
      
      if (scrollPercent < 0.2) {
        newDepth = 'surface';
        newFillPercentage = scrollPercent / 0.2;
      } else if (scrollPercent < 0.4) {
        newDepth = 'shallow';
        newFillPercentage = 0.2 + (scrollPercent - 0.2) / 0.2;
      } else if (scrollPercent < 0.6) {
        newDepth = 'moderate';
        newFillPercentage = 0.4 + (scrollPercent - 0.4) / 0.2;
      } else if (scrollPercent < 0.8) {
        newDepth = 'deep';
        newFillPercentage = 0.6 + (scrollPercent - 0.6) / 0.2;
      } else {
        newDepth = 'abyss';
        newFillPercentage = 0.8 + (scrollPercent - 0.8) / 0.2;
      }
      
      setFillPercentage(newFillPercentage);
      setCurrentDepth(newDepth);
    };
    
    // Set the initial depth marker
    updateDepthMarker();
    
    // Add scroll event listener
    window.addEventListener('scroll', updateDepthMarker);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', updateDepthMarker);
    };
  }, []);
  
  return (
    <div className="depth-marker">
      <div className="depth-line">
        <div 
          className="depth-line-fill"
          style={{ height: `${fillPercentage * 100}%` }}
        ></div>
      </div>
      
      <span className={`depth-text surface ${currentDepth === 'surface' ? 'visible' : ''}`}>
        0m - Surface
      </span>
      <span className={`depth-text shallow ${currentDepth === 'shallow' ? 'visible' : ''}`}>
        200m - Shallow Zone
      </span>
      <span className={`depth-text moderate ${currentDepth === 'moderate' ? 'visible' : ''}`}>
        500m - Moderate Zone
      </span>
      <span className={`depth-text deep ${currentDepth === 'deep' ? 'visible' : ''}`}>
        1000m - Deep Zone
      </span>
      <span className={`depth-text abyss ${currentDepth === 'abyss' ? 'visible' : ''}`}>
        4000m - Abyss
      </span>
    </div>
  );
};

export default DepthMarker;