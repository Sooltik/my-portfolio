import React from 'react';
import '../assets/styles/style.css';

const Intro: React.FC = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        <span className="intro-title">Hello, my name is</span> <strong>Sultan Niazov</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        <span className="intro-subtitle">Web & Software Developer</span>
      </p>
      <img src="/img/about-me-pic.jpeg" alt="Sultan Profile Intro" className="intro__img" />
    </section>
  );
};

export default Intro;
