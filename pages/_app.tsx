import Headers from '../components/Headers';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Headers />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
