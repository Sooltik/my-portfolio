import React, { useEffect, useRef } from 'react';
import '../styles/ShallowLayer.css';

const ShallowLayer: React.FC = () => {
  const fishContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (fishContainerRef.current) {
      // Create fish SVG
      const fishSVG = `
        <svg viewBox="0 0 100 50" width="100%" height="100%">
          <path d="M 10,25 Q 30,10 50,25 Q 70,40 90,25 L 90,25 Q 70,10 50,25 Q 30,40 10,25 Z" fill="rgba(255,255,255,0.8)" />
          <circle cx="75" cy="25" r="3" fill="rgba(0,0,0,0.6)" />
        </svg>
      `;
      
      // Set SVG for existing fish
      const fishes = fishContainerRef.current.querySelectorAll('.fish');
      fishes.forEach(fish => {
        fish.innerHTML = fishSVG;
      });
      
      // Optionally add more fish
      for (let i = 0; i < 3; i++) {
        const newFish = document.createElement('div');
        newFish.className = 'fish';
        newFish.innerHTML = fishSVG;
        newFish.style.top = (Math.random() * 70 + 10) + '%';
        newFish.style.left = '-60px';
        newFish.style.animationDelay = (Math.random() * 10) + 's';
        newFish.style.animationDuration = (Math.random() * 15 + 10) + 's';
        fishContainerRef.current.appendChild(newFish);
      }
    }
  }, []);
  
  return (
    <section className="ocean-layer shallow-layer" id="shallow" ref={fishContainerRef}>
      <div className="fish"></div>
      <div className="fish"></div>
      <div className="fish"></div>
      
      <div className="layer-content">
        <h2 className="section__title text-center">My Skills</h2>
        <div className="services">
          {/* Web Development */}
          <div className="service">
            <i className="fas fa-code service-icon"></i>
            <h3>Web Development</h3>
            <p>Creating responsive, modern web applications with cutting-edge technologies</p>
            <ul className="skills-list">
              <li>React</li>
              <li>TypeScript</li>
              <li>CSS</li>
            </ul>
          </div>

          {/* Back-End Development */}
          <div className="service">
            <i className="fas fa-laptop-code service-icon"></i>
            <h3>Back-End Development</h3>
            <p>Building robust server-side applications and APIs</p>
            <ul className="skills-list">
              <li>Node.js</li>
              <li>Express</li>
              <li>API REST</li>
            </ul>
          </div>

          {/* Database & DevOps */}
          <div className="service">
            <i className="fas fa-database service-icon"></i>
            <h3>Database & DevOps</h3>
            <p>Managing data efficiently and deploying applications to the cloud</p>
            <ul className="skills-list">
              <li>PostgreSQL</li>
              <li>NoSQL</li>
              <li>Google Cloud</li>
              <li>Prisma ORM</li>
              <li>Git/GitHub</li>
              <li>GitHub Actions</li>
              <li>Firestore/Firebase</li>
              <li>Docker</li>
            </ul>
          </div>

          {/* Build & Tooling */}
          <div className="service">
            <i className="fas fa-hammer service-icon"></i>
            <h3>Build & Tooling</h3>
            <p>Use of modern build tools offering fast rebuilds, plugin ecosystems, and code‑splitting optimizations</p>
            <ul className="skills-list">
              <li>Vite</li>
              <li>ESLint</li>
              <li>Ionic/Capacitor</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <a href="#moderate" className="btn">Dive Deeper <i className="fas fa-chevron-down"></i></a>
        </div>
      </div>
    </section>
  );
};

export default ShallowLayer;