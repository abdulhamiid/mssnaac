import React from 'react';
import Navbar from '../../navigation/Navbar';
import SectionOne from './components/SectionOne';
import styles from './Home.module.css';
import SectionTwo from './components/SectionTwo';
import SectionFour from './components/SectionFour';

function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionFour />
    </main>
  );
}

export default Home;
