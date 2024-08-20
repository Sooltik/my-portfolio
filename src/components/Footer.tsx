import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a href="mailto:niazov.sultan@gmail.com" className="footer__link">niazov.sultan@gmail.com</a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="//www.linkedin.com/in/sultan-niazov/">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="//github.com/Sooltik">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
