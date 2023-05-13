import React from 'react';
import Navbar from '../../navigation/Navbar';
import SectionOne from './components/SectionOne';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <SectionOne />
    </main>
  );
}

export default Home;
