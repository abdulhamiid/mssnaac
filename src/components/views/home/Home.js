import React from 'react';
import Navbar from '../../navigation/Navbar';
import SectionOne from './sections/One/SectionOne';
import SectionTwo from './sections/Two/SectionTwo';
import SectionFour from './sections/Four/SectionFour';
import SectionFive from './sections/Five/SectionFive';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionFour />
      <SectionFive />
    </main>
  );
}

export default Home;
