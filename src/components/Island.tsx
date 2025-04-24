import React, { useEffect, useRef } from 'react';
import '../styles/Island.css';

interface IslandProps {
  profileImage: string;
  name: string;
  title: string;
  description: string;
}

const Island: React.FC<IslandProps> = ({ profileImage, name, title, description }) => {
  const islandRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add animations to palm leaves
    if (islandRef.current) {
      const palmLeaves = islandRef.current.querySelectorAll('.palm-leaf');
      
      palmLeaves.forEach((leaf, index) => {
        (leaf as HTMLElement).style.animation = `sway 3s ease-in-out infinite`;
        (leaf as HTMLElement).style.animationDelay = `${index * 0.2}s`;
      });
    }
  }, []);
  
  return (
    <div className="island-container">
      {/* Island with palm trees */}
      <div className="island" ref={islandRef}>
        <div className="island-top"></div>
        
        {/* Palm tree left */}
        <div className="palm-tree left">
          <div className="palm-trunk"></div>
          <div className="palm-leaves">
            <div className="palm-leaf"></div>
            <div className="palm-leaf"></div>
            <div className="palm-leaf"></div>
            <div className="palm-leaf"></div>
            <div className="palm-leaf"></div>
            <div className="palm-leaf"></div>
          </div>
        </div>
        
        {/* Palm tree right */}
        <div className="palm-tree right">
          <div className="palm-trunk"></div>
          <div className="palm-leaves">
            <div className="palm-leaf"></div>
            <div className="palm-leaf"></div>
            <div className="palm-leaf"></div>
            <div className="palm-leaf"></div>
            <div className="palm-leaf"></div>
            <div className="palm-leaf"></div>
          </div>
        </div>
      </div>
      
      {/* Profile picture */}
      <div className="profile-container">
        <div className="profile-outline"></div>
        <img src={profileImage} alt={name} className="profile-pic" />
        <div className="profile-shine"></div>
      </div>
      
      {/* Intro content */}
      <div className="intro-content">
        <h1 className="section__title intro-title">
          Hello, I'm <strong>{name}</strong>
        </h1>
        <p className="intro-subtitle">{title}</p>
        <p className="intro-description">{description}</p>
        <a href="#shallow" className="btn btn-dive">
          <span>Dive Down</span>
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Island;