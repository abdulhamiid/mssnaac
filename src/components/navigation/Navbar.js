import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav>
      <header id={styles.logo}>
        <Link to="/">
          <img src="AAC_logo.png" alt="Logo" />
        </Link>
      </header>
      <ul className={styles.nav}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/society">Society</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
        <li>
          <img src="Vector.png" alt="Language" />
        </li>
        <li>
          <Link to="/registration" id={styles.btn}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
