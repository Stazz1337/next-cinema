import React from 'react';
import DetailsHeader from '../app/components/DetailsHeader/DetailsHeader';
import Description from '../app/components/Description/Description';
import Info from '../app/components/Info/Info';
import Similars from '../app/components/Similars/Similars';
import Seasons from '../app/components/Seasons/Seasons';

import Head from 'next/head';

export const getStaticPaths = async () => {
  try {
    const res = await fetch('http://localhost:5000/movies');
    const data = await res.json();

    const paths = data.map((movie) => {
      return {
        params: { id: movie.id },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getStaticProps = async (context) => {
  try {
    const id = context.params.id;
    const res = await fetch(`http://localhost:5000/movies/${id}`);
    const data = await res.json();
    console.log(data);
    return {
      props: { movie: data },
    };
  } catch (error) {
    console.error(error);
  }
};

const Details = ({ movie }) => {
  return (
    <main>
      <Head>
        <title>Tvoe kino - {movie.title}</title>
      </Head>
      <DetailsHeader movie={movie} />
      <Seasons movie={movie} />
      <Description />

      <Similars />
      <Info />
    </main>
  );
};

export default Details;
