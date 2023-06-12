import React from 'react';
import styles from './Society.module.css';

function Card({ name, image, link }) {
  return (
    <>
      <div className={styles.card}>
        <img src={image} alt="jdsh" />
        <p>{ name }</p>
        <a href="https://github.com/abdulhamiid">{ link }</a>
      </div>
    </>
  );
}

export default Card;
