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
import { projectAuth, projectAuthProvider } from '../firebase';
import { useRouter } from 'next/router';

const login: React.FC = () => {
  // State
  const router = useRouter();
  const [email, handleEmail] = useFormState('');
  const [password, handlePassword] = useFormState('');

  // Functions
  const handleEmailPasswordAuthSignin = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (email && password)
      projectAuth
        .signInWithEmailAndPassword(email, password)
        .then((authUser) => {
          if (authUser) {
            router.push('/');
          }
        })
        .catch((e) => alert(e.message));
  };

  const handleLoginWithGoogle = (e: any) => {
    e.preventDefault();
    projectAuth
      .signInWithPopup(projectAuthProvider)
      .then((authUser) => {
        if (authUser) {
          router.push('/');
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={styles.login}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form noValidate onSubmit={handleEmailPasswordAuthSignin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoFocus
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
            Sign In
          </Button>
          <Divider style={{ margin: '1rem 0' }} />
        </form>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLoginWithGoogle}
        >
          Sign In With Google
        </Button>
      </div>
    </Container>
  );
};

export default login;
