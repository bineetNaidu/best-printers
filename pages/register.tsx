import styles from '../styles/login.module.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import useFormState from '../hooks/useFormState';
import { projectAuth } from '../firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';

const register: React.FC = () => {
  // State
  const router = useRouter();
  const [email, handleEmail] = useFormState('');
  const [password, handlePassword] = useFormState('');
  const [username, handleUsername] = useFormState('');

  // Functions
  const handleEmailPasswordAuthSignin = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (email && password)
      projectAuth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          if (authUser) {
            projectAuth.currentUser
              .updateProfile({ displayName: username })
              .then(() => router.push('/'));
          }
        })
        .catch((e) => alert(e.message));
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={styles.login}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create a New Account
        </Typography>
        <form noValidate onSubmit={handleEmailPasswordAuthSignin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={handleUsername}
          />{' '}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            value={email}
            onChange={handleEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={handlePassword}
          />
          <Button type="submit" fullWidth variant="contained" color="secondary">
            Register Account
          </Button>
          <Divider style={{ margin: '1rem 0' }} />
        </form>
        <Divider />
        <Link href="/login">
          <a style={{ textDecoration: 'underline' }}>
            Already have an Account?
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default register;
