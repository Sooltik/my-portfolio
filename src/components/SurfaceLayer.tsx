import React from 'react';
import WaterCreatures from './WaterCreatures';
import WaveDivider from './WaveDivider';
import '../styles/SurfaceLayer.css';

const SurfaceLayer: React.FC = () => {
  return (
    <section className="ocean-layer surface-layer" id="surface">
      <div className="surface-objects">
        <div className="cloud cloud--1"></div>
        <div className="cloud cloud--2"></div>
        <div className="cloud cloud--3"></div>
        <div className="cloud cloud--4"></div>
        <div className="cloud cloud--5"></div>
        <div className="cloud cloud--6"></div>
      </div>
      
      <div className="layer-content">
        <div className="island-container">
          {/* Island with palm trees */}
          <div className="island">
            <div className="island-top">
              {/* Profile elements moved inside the island-top */}
              <div className="profile-container">
                <div className="profile-outline"></div>
                <img src="img/intro-pic.jpg" alt="Sultan Niazov" className="profile-pic" />
                <div className="profile-shine"></div>
              </div>
              
              <div className="intro-content">
                <h1 className="intro-title">
                  Hello, I'm <strong>Sultan Niazov</strong>
                </h1>
                <p className="intro-subtitle">Full Stack Developer</p>
                <p className="intro-description">Dive deeper to explore my skills and projects</p>
                <a href="#shallow" className="btn btn-dive">
                  <span>Dive Down</span>
                  <i className="fas fa-chevron-down"></i>
                </a>
              </div>
            </div>
            
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
        </div>
      </div>
      
      <WaterCreatures />
      <WaveDivider />
    </section>
  );
};

export default SurfaceLayer;