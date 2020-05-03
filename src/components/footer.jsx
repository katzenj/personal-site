import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from 'src/styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/jordankatzen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
      </a>
      <a
        href="https://github.com/katzenj/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
      </a>
      <a href="mailto:jkatzen8@gmail.com">
        <FontAwesomeIcon icon={['fas', 'paper-plane']} size="lg" />
      </a>
      <p>Jordan Katzen © 2020</p>
    </footer>
  );
};

export default Footer;
