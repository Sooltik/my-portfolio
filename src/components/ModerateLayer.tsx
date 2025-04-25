import React from 'react';
import '../styles/ModerateLayer.css';

const ModerateLayer: React.FC = () => {
  return (
    <section className="ocean-layer moderate-layer" id="moderate">
      <div className="seaweed"></div>
      <div className="seaweed"></div>
      <div className="seaweed"></div>
      <div className="seaweed"></div>
      <div className="seaweed"></div>
      <div className="seaweed"></div>
      <div className="seaweed"></div>

      <div className="layer-content">
        <h2 className="section__title">About Me</h2>
        <div className="about-container">
          <div className="about-text">
            <p>
              I'm a passionate software developer with a love for exploring and learning new technologies. Constantly
              seeking new knowledge, I combine my technical skills with creativity to build elegant solutions to complex
              problems.
            </p>
            <p>
              My expertise in <strong>Object-Oriented Programming and Web Technologies</strong>, combined with my eye
              for design and problem-solving abilities, allows me to develop applications that are not only functional but
              also user-friendly and visually appealing.
            </p>
            <p>
              I'm always staying up-to-date on industry trends and expanding my skill set to tackle new challenges in
              the ever-evolving world of technology.
            </p>
            <div className="btn-container">
              <a href="#deep" className="btn">Explore Projects <i className="fas fa-chevron-down"></i></a>
            </div>
          </div>
          <div className="about-image-container">
            <img 
              src="img/about-me-pic.jpeg" 
              alt="Sultan Niazov" 
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModerateLayer;