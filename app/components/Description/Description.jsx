import React from 'react';
import styles from './Description.module.css';
import Image from 'next/image';

const Description = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Описание</h2>
      <p className={styles.description}>
        Детективная история, наполненная сверхъестественными силами. Главная героиня сериала —
        Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов,
        которая становится студенткой академии «Невермор». Она пытается овладеть своими
        проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что
        терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её
        родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в
        академии.
      </p>
      <div className={styles.container}>
        <Image src={'/alert.svg'} alt='alert' width={48} height={48} className={styles.img} />
        <p className={styles.info}>
          Контент может содержать сцены курения и употребления спиртных напитков. Курение и
          чрезмерное употребление алкоголя вредит вашему здоровью.
        </p>
      </div>
    </section>
  );
};

export default Description;
