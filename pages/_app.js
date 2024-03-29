import Layout from '../app/components/layout.js';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
 
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
