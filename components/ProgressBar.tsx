import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

interface Props {
  setFile: React.Dispatch<any>;
  file: any;
  name: string;
  description: string;
  resetDesc: () => void;
  resetName: () => void;
  setReady: React.Dispatch<boolean>;
}

const ProgressBar: React.FC<Props> = ({
  file,
  setFile,
  name,
  resetDesc,
  resetName,
  setReady,
  description,
}) => {
  // HOOKS
  const { url, progress } = useStorage(
    'printers',
    file,
    { name, description },
    setReady
  );
  useEffect(() => {
    if (url) {
      setReady(false);
      setFile(null);
      resetName();
      resetDesc();
    }
    // eslint-disable-next-line
  }, [url, setFile, setReady]);
  return (
    <div
      style={{
        width: `${progress}%`,
        height: '.5rem',
        marginTop: '20px',
        background: '#000',
      }}
    ></div>
  );
};

export default ProgressBar;
