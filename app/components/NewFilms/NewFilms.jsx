import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './NewFilms.module.css';

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';



const NewFilms = ({ movies }) => {

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Новинки</h2>
      <div className={styles.swiperWrapper}>
        <Swiper slidesPerView='auto' spaceBetween={44} className={styles.swiper}>
          {movies ? movies.map((item) => (
            <SwiperSlide key={item.id} className={styles.slide}>
              <Link href={`${item.id}`} className={styles.link}>
                <Image
                  src={item.card}
                  alt={item.title}
                  width={398}
                  height={597}
                  className={styles.img}
                />
                <p className={styles.rating}>{item.rating}</p>
                <h3 className={styles.movieTitle}>{item.title}</h3>
              </Link>
            </SwiperSlide>
          ))
            : "loading"}
        </Swiper>
      </div>
    </section>
  );
};

export default NewFilms;
