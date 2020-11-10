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
      <Headers user={user} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default memo(MyApp);
