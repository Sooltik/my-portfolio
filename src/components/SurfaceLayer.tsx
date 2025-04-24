import React from 'react';
import Island from './Island';
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
        <Island 
          profileImage="img/intro-pic.jpg"
          name="Sultan Niazov"
          title="Full Stack Developer"
          description="Dive deeper to explore my skills and projects"
        />
      </div>
      
      <WaterCreatures />
      <WaveDivider />
    </section>
  );
};

export default SurfaceLayer;