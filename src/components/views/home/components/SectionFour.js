import React from 'react';
import styles from './SectionFour.module.css';

function SectionFour() {
  return (
    <section className={styles.testimony}>
      <h2>Testimonials</h2>
      <p>Hear from individuals who value being part of our society.</p>
      <div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <img src="microphone.svg" alt="icon" />
          </div>
          <h3>Aisha Zayad</h3>
          <p>I&apos;ve been a member of this society for a year now.</p>
          <br />
          <p>The events are always engaging and informative.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <img src="microphone.svg" alt="icon" />
          </div>
          <h3>Jagun Ashraf</h3>
          <p>I&apos;ve been a member of this society for a year now.</p>
          <br />
          <p>The events are always engaging and informative.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <img src="microphone.svg" alt="icon" />
          </div>
          <h3>Umar Fadhl</h3>
          <p>I&apos;ve been a member of this society for a year now.</p>
          <br />
          <p>The events are always engaging and informative.</p>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
