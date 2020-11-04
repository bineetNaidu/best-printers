import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase';

type User = {
  username: string;
  email: string;
};

const index = () => {
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
  console.log('rendering');
  return (
    <div>
      <h1>Lets Build the best printers site</h1>
    </div>
  );
};

export default index;
