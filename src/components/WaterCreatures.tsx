import React from 'react';
import '../styles/WaterCreatures.css';

const fishTypes = [
  { size: 40, bottom: 40, left: '10%', duration: 25, delay: 0, blur: 0 },
  { size: 30, bottom: 80, left: '30%', duration: 35, delay: 2, blur: 1 },
  { size: 25, bottom: 130, left: '70%', duration: 28, delay: 5, blur: 2 },
  { size: 20, bottom: 180, left: '85%', duration: 40, delay: 3, blur: 3 },
  { size: 15, bottom: 220, left: '50%', duration: 30, delay: 1, blur: 1 },
  { size: 35, bottom: 60, left: '20%', duration: 33, delay: 4, blur: 0 },
  { size: 28, bottom: 110, left: '40%', duration: 26, delay: 6, blur: 1 },
  { size: 18, bottom: 160, left: '60%', duration: 38, delay: 2, blur: 2 },
  { size: 22, bottom: 200, left: '75%', duration: 45, delay: 5, blur: 3 },
  { size: 12, bottom: 250, left: '35%', duration: 20, delay: 0, blur: 2 }
];

const WaterCreatures: React.FC = () => {
  return (
    <div className="water-creatures">
      {fishTypes.map((fish, index) => (
        <svg
          key={`fish-${index}`}
          className="small-fish"
          style={{
            bottom: `${fish.bottom}px`,
            left: fish.left,
            animationDuration: `${fish.duration}s`,
            animationDelay: `${fish.delay}s`,
            filter: `blur(${fish.blur}px)`
          }}
          width={fish.size}
          height={fish.size / 2}
          viewBox="0 0 40 20"
        >
          <path
            d="M5,10 Q15,3 25,10 L35,10 L30,15 L35,10 L30,5 Z"
            fill={`rgba(255, 255, 255, ${0.5 + 0.1 * (5 - fish.blur)})`}
          />
          <circle cx="8" cy="10" r="2" fill="rgba(0,0,0,0.5)" />
        </svg>
      ))}
    </div>
  );
};

export default WaterCreatures;