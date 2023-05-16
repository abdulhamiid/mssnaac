import React from 'react';
import styles from './SectionFive.module.css';
import Card from './Card';

function SectionFive() {
  return (
    <section>
      <div className={styles.press}>
        <h2>Al-Faaedah Press</h2>
        <div>
          <p>Access more beneficial knowledge that are priceless but free.</p>
          <a href="https://alfaaedahpress.wordpress.com/" className={styles.button} rel="noreferrer" target="_blank">
            <span>View Blog</span>
          </a>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </section>
  );
}

export default SectionFive;
