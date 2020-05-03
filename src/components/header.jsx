import React from 'react';
import { Link } from '@reach/router';

import styles from 'src/styles/header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link className={styles.title} to="/">
          Jordan Katzen
        </Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link
              className={styles.navItem}
              to="/"
              getProps={({ isCurrent }) => ({
                // Little bit of a hack workaround for the time being.
                style: {
                  color: isCurrent ? '#222' : '#999'
                }
              })}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              to="/about"
              getProps={({ isCurrent }) => ({
                // Little bit of a hack workaround for the time being.
                style: {
                  color: isCurrent ? '#222' : '#999'
                }
              })}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
