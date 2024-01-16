import React from 'react';
import styles from './Info.module.css';

const Info = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Информация</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.itemTitle}>Премьера в мире</h3>
          <p className={styles.itemText}>31 октября 2022</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.itemTitle}>Страна</h3>
          <p className={styles.itemText}>США</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.itemTitle}>Язык аудиодорожки</h3>
          <p className={styles.itemText}>Rus, Eng</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.itemTitle}>Оригинальное название</h3>
          <p className={styles.itemText}>Wednesday</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.itemTitle}>Жанры</h3>
          <p className={styles.itemText}>Фентези, Комедия, Криминал </p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.itemTitle}>Качество</h3>
          <p className={styles.itemText}>Full HD</p>
        </li>
      </ul>
    </section>
  );
};

export default Info;
