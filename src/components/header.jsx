import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
            <NavLink
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
