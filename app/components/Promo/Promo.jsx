import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Promo.module.css';

const Promo = () => {
  return (
    <section className={styles.root}>
      <Image priority  src='/promo.png' alt='logo' width={1250} height={800} className={styles.imgBack} />
      <div className={styles.container}>
        <Image src='/title.png' alt='title' width={576} height={228} className={styles.imgTitle} />
        <h1 className={styles.title}>
          Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле.
        </h1>
        <div className={styles.buttonsWrapper}>
          <Link className={styles.button} href='/'>
            Смотреть
          </Link>
          <Link className={styles.button} href='/'>
            О фильме
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Promo;
