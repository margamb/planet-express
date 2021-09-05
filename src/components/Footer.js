import React from 'react';
import './Footer.css';

import GithubIcon from '../images/GithubIcon';
import LinkedinIcon from '../images/LinkedinIcon';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <Logo className="footer__logo" />
        <p className="footer__info--text">
          Planet Express es una empresa dedicada al envio interestelar
        </p>
        <ul className="footer__info--nav">
          <li>
            <a href="https://github.com/margamb">
              <GithubIcon className="github-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/margamarben/">
              <LinkedinIcon className="linkedin-icon" />
            </a>
          </li>
        </ul>
      </div>
      <p className="footer__copyright">
        <strong>&copy; 3000 </strong> Planet Express. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
