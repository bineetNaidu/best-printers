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
  link: string;
  resetLink: () => void;
  price: number;
  resetPrice: () => void;
}

const ProgressBar: React.FC<Props> = ({
  file,
  setFile,
  name,
  resetDesc,
  resetName,
  setReady,
  description,
  resetLink,
  resetPrice,
  link,
  price,
}) => {
  // HOOKS
  const { url, progress, error } = useStorage(
    'printers',
    file,
    { name, description, link, price },
    setReady
  );
  error && alert(error);
  useEffect(() => {
    if (url) {
      setReady(false);
      setFile(null);
      resetName();
      resetDesc();
      resetLink();
      resetPrice();
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
