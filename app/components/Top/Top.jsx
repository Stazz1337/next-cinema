import React from 'react';
import Image from 'next/image';
import styles from './Top.module.css';
import Link from 'next/link';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Top = () => {
  const data = [
    {
      id: 1,
      title: '1',
      img: '/card.png',
      position: '1',
    },
    {
      id: 2,
      title: '2',
      img: '/card.png',
      position: '2',
    },
    {
      id: 3,
      title: '3',
      img: '/card.png',
      position: '3',
    },
    {
      id: 4,
      title: '4',
      img: '/card.png',
      position: '4',
    },
    {
      id: 5,
      title: '5',
      img: '/card.png',
      position: '5',
    },
    {
      id: 6,
      title: '6',
      img: '/card.png',
      position: '6',
    },
    {
      id: 7,
      title: '7',
      img: '/card.png',
      position: '7',
    },
  ];
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>
        <span className={styles.span}>Топ-10</span>просмотров за неделю
      </h2>

      <div className={styles.list}>
        <Swiper slidesPerView='auto' spaceBetween={240} >
          {data.map((item) => (
            <SwiperSlide className={styles.item} key={item.id}>
              <p className={styles.movieRating}>{item.position}</p>

              <Image src={item.img} alt='top' width={398} height={597} className={styles.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Top;
