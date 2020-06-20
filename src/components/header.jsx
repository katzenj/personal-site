import { h } from 'preact';
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
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/about"
            >
              about
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
