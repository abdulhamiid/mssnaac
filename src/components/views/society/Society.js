import React from 'react';
import Navbar from '../../navigation/Navbar';
import Card from './Card';
import abadina from './assets/Ellipse 3.png';
import community from './assets/Ellipse 4.png';
import international from './assets/Ellipse 5.png';
import styles from './Society.module.css';

function Society({ image, name, link }) {
  return (
    <>
      <Navbar />
      <div className={styles.header}>
        <h1>MSSNAAC Societies</h1>
        <p>Our diverse range of student societies </p>
      </div>
      <div className={styles.cards}>
        <Card
          className={styles.card}
          image={abadina}
          name="Abadina College
          UI, Ibadan"
          link="website"
        />
        <Card
          className={styles.card}
          image={community}
          name="Abadina College
          UI, Ibadan"
          link="website"
        />
        <Card
          className={styles.card}
          image={international}
          name="Abadina College
          UI, Ibadan"
          link="website"
        />
      </div>
      <div className={styles.cards}>
        <Card
          className={styles.card}
          image={abadina}
          name="Abadina College
          UI, Ibadan"
          link="website"
        />
        <Card
          className={styles.card}
          image={community}
          name="Abadina College
          UI, Ibadan"
          link="website"
        />
        <Card
          className={styles.card}
          image={international}
          name="Abadina College
          UI, Ibadan"
          link="website"
        />
      </div>
      <div className={styles.btn}>
        <button type="button" className={styles.prev}>Prev</button>
        <button type="button" className={styles.next}>Next</button>
      </div>
    </>
  );
}

export default Society;
