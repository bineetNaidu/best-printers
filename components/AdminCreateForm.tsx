import React from 'react';
import styles from './AdminCreateForm.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useFormState from '../hooks/useFormState';

const AdminCreateForm = () => {
  // States
  const [name, handleName, resetname] = useFormState('');
  const [description, handleDescription, resetDesc] = useFormState('');
  const [file, setFile] = React.useState<any>(undefined);
  console.log(file);
  return (
    <form className={styles.adminCreateForm}>
      <h1>Add New Printer</h1>
      <TextField
        label="Name"
        variant="outlined"
        margin="normal"
        value={name}
        onChange={handleName}
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
    </form>
  );
};

export default AdminCreateForm;
