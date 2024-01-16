import React from 'react';
import styles from './Similars.module.css';

import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

const Similars = () => {
  const data = [
    {
      id: 1,
      title: '1',
      img: '/similars.png',
    },
    {
      id: 2,
      title: '2',
      img: '/similars.png',
    },
    {
      id: 3,
      title: '3',
      img: '/similars.png',
    },
    {
      id: 4,
      title: '4',
      img: '/similars.png',
    },
    {
      id: 5,
      title: '5',
      img: '/similars.png',
    },
    {
      id: 6,
      title: '6',
      img: '/similars.png',
    },
    {
      id: 7,
      title: '7',
      img: '/similars.png',
    },
  ];
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Похожее</h2>
      <div className={styles.swiperWrapper}>
        <Swiper slidesPerView='auto' spaceBetween={44} className={styles.swiper}>
          {data.map((item) => (
            <SwiperSlide key={item.id} className={styles.slide}>
              <Link href='#' className={styles.link}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={255}
                  height={382}
                  className={styles.img}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Similars;
