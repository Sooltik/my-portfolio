import React from 'react';

const MyServices: React.FC = () => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Web Technologies</h3>
          <p>JavaScript, TypeScript, HTML/CSS, React</p>
        </div>
        <div className="service">
          <h3>Programming Languages</h3>
          <p>C#, Java, Python</p>
        </div>
        <div className="service">
          <h3>RDBMS & Other</h3>
          <p>SQL, noSQL, Git, Node.js, API REST, Agile, Google Cloud Platform</p>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
