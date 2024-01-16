import NewFilms from '../app/components/NewFilms/NewFilms';
import Promo from '../app/components/Promo/Promo';
import Top from '../app/components/Top/Top';
import Head from 'next/head';

export const getStaticProps = async () => {
  try {
    const res = await fetch('http://localhost:5000/movies');
    const data = await res.json();
    return {
      props: { movies: data },
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default function Home({ movies }) {
  return (
    <div>
      <Head>
        <title>Tvoe kino</title>
      </Head>
      <main>
        <Promo />
        <NewFilms movies={movies} />
        <Top />
      </main>
    </div>
  );
}
