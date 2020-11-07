import { useState } from 'react';
import styles from './AdminCreateForm.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useFormState from '../hooks/useFormState';
import ProgressBar from './ProgressBar';

const AdminCreateForm = () => {
  // States
  const [name, handleName, resetname] = useFormState('');
  const [description, handleDescription, resetDesc] = useFormState('');
  const [price, handlePrice, resetPrice] = useFormState(0);
  const [link, handleLink, resetlink] = useFormState('');
  const [file, setFile] = useState<any>(undefined);
  const [ready, setReady] = useState<boolean>(false);

  // Functions
  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (description && name && file) {
      setReady(true);
    } else {
      setReady(false);
      alert('You Need To fill out the fields');
    }
  };
  return (
    <form className={styles.adminCreateForm} onSubmit={handleSumbit}>
      <h1>Add New Printer</h1>
      <TextField
        label="Name"
        variant="outlined"
        margin="normal"
        value={name}
        onChange={handleName}
      />
      <TextField
        label="Price"
        variant="outlined"
        margin="normal"
        type="number"
        value={price}
        onChange={handlePrice}
      />
      <TextField
        label="Affilate Link"
        variant="outlined"
        margin="normal"
        value={link}
        onChange={handleLink}
      />
      <TextField
        label="Description"
        multiline
        variant="outlined"
        margin="normal"
        value={description}
        onChange={handleDescription}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      {file && <span>{file?.name}</span>}
      <Button type="submit" variant="contained" color="primary">
        Upload
      </Button>
      {ready && (
        <ProgressBar
          file={file}
          setFile={setFile}
          name={name}
          resetName={resetname}
          description={description}
          resetDesc={resetDesc}
          setReady={setReady}
          price={price}
          resetPrice={resetPrice}
          link={link}
          resetLink={resetlink}
        />
      )}
    </form>
  );
};

export default AdminCreateForm;
