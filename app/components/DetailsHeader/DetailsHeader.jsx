import React from 'react';
import styles from './DetailsHeader.module.css';
import Image from 'next/image';
import Link from 'next/link';

const DetailsHeader = ({movie}) => {
  return (
    <section className={styles.root}>
      <Image
        src={movie.poster}
        alt='logo'
        width={1400}
        height={780}
        className={styles.img}
      />
      <div className={styles.container}>
        <h2 className={styles.title}>{movie.title}</h2>
        
        <ul className={styles.infoList}>

          <li className={styles.infoItem}>
            <p className={styles.infoText}>{movie.rating}</p>
          </li>
          <li className={styles.infoItem}>
            <p className={styles.infoText}>{movie.year}</p>
          </li>
          <li className={styles.infoItem}>
            <p className={styles.infoText}>{movie.seasons.length} сезона</p>
          </li>
          <li className={styles.infoItem}>
            <p className={styles.infoText}>{movie.country}</p>
          </li>
          <li className={styles.infoItem}>
            <p className={styles.infoText}>{movie.genre}</p>
          </li>
          <li className={styles.infoItem}>
            <p className={styles.infoText}>{movie.age}</p>
          </li>
       
        </ul>
        <p className={styles.description}>{movie.description}</p>
        <div className={styles.buttonsWrapper}>
          <Link className={styles.button} href='/'>
            Смотреть
          </Link>
          <Link className={styles.button} href='/'>
            Трейлер
          </Link>
          <Link className={`${styles.button} ${styles.buttonMin}`} href='/'>
            <Image src='bookmark.svg' alt='bookmark' width={32} height={32} />
          </Link>
          <Link className={`${styles.button} ${styles.buttonMin}`} href='/'>
            <Image src='like.svg' alt='like' width={32} height={32} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DetailsHeader;
