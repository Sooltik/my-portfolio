import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Sultan Niazov</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Web & Software Developer
      </p>
      <img src="/img/about-me-pic.jpeg" alt="Sultan Profile Intro" className="intro__img" />
    </section>
  );
};

export default Intro;
