import React from 'react';
import '../styles/WaterCreatures.css';

const WaterCreatures: React.FC = () => {
  return (
    <div className="water-creatures">
      <svg className="small-fish" width="40" height="20" viewBox="0 0 40 20">
        <path d="M5,10 Q15,3 25,10 L35,10 L30,15 L35,10 L30,5 Z" fill="rgba(255,255,255,0.7)" />
        <circle cx="8" cy="10" r="2" fill="rgba(0,0,0,0.5)" />
      </svg>
      
      <svg className="small-fish" width="30" height="15" viewBox="0 0 40 20">
        <path d="M5,10 Q15,3 25,10 L35,10 L30,15 L35,10 L30,5 Z" fill="rgba(255,255,255,0.7)" />
        <circle cx="8" cy="10" r="2" fill="rgba(0,0,0,0.5)" />
      </svg>
      
      <svg className="small-fish" width="25" height="12" viewBox="0 0 40 20">
        <path d="M5,10 Q15,3 25,10 L35,10 L30,15 L35,10 L30,5 Z" fill="rgba(255,255,255,0.7)" />
        <circle cx="8" cy="10" r="2" fill="rgba(0,0,0,0.5)" />
      </svg>
    </div>
  );
};

export default WaterCreatures;