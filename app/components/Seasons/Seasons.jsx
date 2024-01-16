import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Seasons.module.css';
import { useState } from 'react';

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

const Seasons = ({ movie }) => {
  console.log(movie);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (index) => {
    setActiveButton(index);
    setCurrentIndex(index);
  };

  const buttonValues = Array.from({ length: movie.seasons.length }).map((_, index) => index);

  useEffect(() => {
    console.log(buttonValues);
    console.log(activeButton);
    console.log(currentIndex);
  }, [buttonValues, currentIndex, activeButton]);

  function plural(value, variants = {}, locale = 'ru-RU') {
    const key = new Intl.PluralRules(locale).select(value);
    return variants[key] || '';
  }

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>Сезоны</h2>
        <div className={styles.buttonsContainer}>
          {buttonValues.map((value, index) => (
            <button
              key={index}
              className={
                index === activeButton ? `${styles.button} ${styles.activeButton}` : styles.button
              }
              onClick={() => handleClick(index)}>
              <p className={styles.buttonText}>{value + 1}</p>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.swiperWrapper}>
        <Swiper slidesPerView='auto' spaceBetween={20} className={styles.swiper}>
          {movie
            ? movie.seasons.map((item) => (
                <SwiperSlide key={item.id} className={styles.slide}>
                  <Link href='#' className={styles.link}>
                    <Image
                      src={item.scenes[currentIndex].img}
                      alt={item.title}
                      width={544}
                      height={306}
                      className={styles.img}
                    />
                    <p className={styles.movieTitle}>{item.id} серия</p>
                    <p className={styles.movieDuration}>
                      {item.duration}{' '}
                      {plural(item.duration, {
                        one: 'минута',
                        few: 'минуты',
                        many: 'минут',
                      })}
                    </p>
                  </Link>
                </SwiperSlide>
              ))
            : 'loading'}
        </Swiper>
      </div>
    </section>
  );
};

export default Seasons;
