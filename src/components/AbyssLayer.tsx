import React from 'react';
import '../styles/AbyssLayer.css';

const AbyssLayer: React.FC = () => {
  return (
    <section className="ocean-layer abyss-layer" id="abyss">
      <div className="glow"></div>
      <div className="glow"></div>
      <div className="glow"></div>

      <div className="layer-content">
        <h2 className="section__title">Get In Touch</h2>
        <div className="contact-container">
          <p>Interested in working together? Feel free to reach out!</p>
          <a href="mailto:niazov.sultan@gmail.com" className="email-link">
            niazov.sultan@gmail.com
          </a>

          <ul className="social-list">
            <li className="social-item">
              <a 
                href="https://www.linkedin.com/in/sultan-niazov/" 
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-item">
              <a 
                href="https://github.com/Sooltik" 
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Sultan Niazov. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default AbyssLayer;