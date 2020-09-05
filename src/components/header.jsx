import { h } from "preact";
import { Link, NavLink, useLocation } from "react-router-dom";
import classnames from "classnames";

import { ABOUT, HOME } from "src/utils/defs";
import { getPage } from "src/utils/utils";

import styles from "src/styles/header.module.scss";

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
              className={classnames({
                [styles.navItem]: true,
                [styles.activeNavItem]:
                  getPage(useLocation().pathname) === HOME,
              })}
              to="/"
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classnames({
                [styles.navItem]: true,
                [styles.activeNavItem]:
                  getPage(useLocation().pathname) === ABOUT,
              })}
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
