import React, { useEffect, useRef } from 'react';
import '../styles/DeepLayer.css';

const DeepLayer: React.FC = () => {
  const layerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Add animated bubbles dynamically
    if (layerRef.current) {
      const bubbles = layerRef.current.querySelectorAll('.bubble');
      
      // Add animation properties
      bubbles.forEach((bubble, index) => {
        (bubble as HTMLElement).style.animationDelay = `${index * 0.5}s`;
      });
    }
  }, []);
  
  return (
    <section className="ocean-layer deep-layer" id="deep" ref={layerRef}>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      <div className="layer-content">
        <h2 className="section__title">Featured Projects</h2>
        <div className="projects">
          {/* Project 1 */}
          <div className="project">
            <h3>E-Commerce Platform</h3>
            <p>A full-featured online store with product catalog, shopping cart, and payment processing.</p>
            <p className="project-tech"><strong>Technologies:</strong> React, Node.js, PostgreSQL, Stripe API</p>
          </div>

          {/* Project 2 */}
          <div className="project">
            <h3>Task Management App</h3>
            <p>Collaborative project management tool with real-time updates and team communication features.</p>
            <p className="project-tech"><strong>Technologies:</strong> TypeScript, Firebase, React, Express</p>
          </div>

          {/* Project 3 */}
          <div className="project">
            <h3>Weather Visualization</h3>
            <p>Interactive dashboard displaying weather data with customizable views and forecasting.</p>
            <p className="project-tech"><strong>Technologies:</strong> D3.js, React, OpenWeather API</p>
          </div>
        </div>
        <div className="text-center">
          <a href="#abyss" className="btn">Contact Me <i className="fas fa-chevron-down"></i></a>
        </div>
      </div>
    </section>
  );
};

export default DeepLayer;