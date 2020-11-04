import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';

// takes a collection name
const useFirestore = (collection: string) => {
  // STATES
  const [docs, setDocs] = useState([]);

  // HOOKS
  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snaps) => {
        let documents: any = [];
        snaps.forEach((doc) => documents.push({ ...doc.data(), id: doc.id }));
        setDocs(documents);
      });

    return () => unsubscribe();
    // eslint-disable-next-line
  }, [collection]);

  return { docs };
};

export default useFirestore;
