import Head from 'next/head';
import Footer from '../components/Footer';
import Headers from '../components/Headers';
import { useState, useEffect, memo } from 'react';
import { projectAuth } from '../firebase';
// Statics
import '../styles/globals.css';

type User = {
  username: string;
  email: string;
};

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unSubAuthState = projectAuth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser({ username: authUser.displayName, email: authUser.email });
      } else {
        setUser(null);
      }
    });

    return () => {
      unSubAuthState();
    };
  }, []);
  return (
    <>
      <Head>
        <title>The Best Printers</title>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="the best printers" />
      </Head>
      <Headers user={user} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default memo(MyApp);
