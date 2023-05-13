import React from 'react';
import styles from './SectionOne.module.css';

function SectionOne() {
  return (
    <>
      <section>
        <header>
          <h1 className={styles.h1}>
            Building
            {' '}
            <span className={styles.highlight}>stronger</span>
            {' '}
            communities
            <br />
            of Muslim students
          </h1>
          <p>
            Discover a network of Muslim students dedicated to building
            <br />
            a better future for the Ummah.
          </p>
          <button type="button">Join us</button>
          <div className={styles.showcase}>
            <img src="Rectangle.png" alt="show_img" className={styles.grey} />
            <img src="Rectangle2.png" alt="show_img" />
            <img src="Rectangle3.png" alt="show_img" className={styles.grey} />
          </div>
          <div className={styles.card}>
            <div>
              <h2>10+</h2>
              <p>
                Active
                <br />
                Societies
              </p>
            </div>
            <div>
              <h2>100+</h2>
              <p>
                Vibrant
                <br />
                Members
              </p>
            </div>
            <div>
              <h2>500+</h2>
              <p>
                Tutored
                <br />
                Students
              </p>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default SectionOne;
