import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase';

const useStorage = (
  collectionName: string,
  file: any,
  data: any,
  setReady: React.Dispatch<boolean>
) => {
  // STATES
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<any>(null);
  const [url, setUrl] = useState(null);

  // HOOKS && CONTEXTS
  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection(collectionName);

    storageRef.put(file).on(
      'state_changed',
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => setError(err),
      async () => {
        const url = await storageRef.getDownloadURL();
        collectionRef.add({ url, ...data, timestamp });
        setUrl(url);
        setReady(false);
      }
    );
    // eslint-disable-next-line
  }, [file, setReady]);

  return { progress, url, error };
};

export default useStorage;