import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://github.com/iamvsc04" target="_blank" rel="noreferrer" className="social-link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/sai-charan-veerlapati" target="_blank" rel="noreferrer" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://leetcode.com/Sai_Charan04" target="_blank" rel="noreferrer" className="social-link">
            <FontAwesomeIcon icon={faCode} />
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Sai Charan Veerlapati. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 