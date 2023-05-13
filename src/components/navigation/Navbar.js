import React from 'react';
import {
  Link,
  NavLink,
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
          <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/society">Societies</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/donate">Donate</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="/project">Project</NavLink>
        </li>
        <li>
          <img src="Vector.png" alt="Language" />
        </li>
        <li>
          <NavLink id={styles.btn} className={({ isActive }) => (isActive ? 'active' : undefined)} to="/registration">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
