import React from 'react';
import Navbar from '../../navigation/Navbar';
import SectionOne from './components/SectionOne';
import styles from './Home.module.css';
import SectionTwo from './components/SectionTwo';

function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <SectionOne />
      <SectionTwo />
    </main>
  );
}

export default Home;
