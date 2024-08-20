import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Full Stack Developer
      </p>
      <div className="about-me__body">
        <p>
          I love exploring and learning! Constantly seeking for new knowledge, I am an ambitious
          developer familiar with a variety of programming languages. I have extensive knowledge of <strong>Object-Oriented Programming and Web Technologies</strong> and combining with my love for design and my problem-solving passion, I am seeking out new technologies and staying up-to-date on trends in the industry.
        </p>
      </div>
      <img src={'../../public/img/about-me-pic.jpeg'} alt="Sultan Profile About Me" className="about-me__img" />
    </section>
  );
};

export default AboutMe;
