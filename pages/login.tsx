import styles from '../styles/login.module.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

const login: React.FC = () => {
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
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
          />
          <Button type="submit" fullWidth variant="contained" color="secondary">
            Sign In
          </Button>
          <Divider style={{ margin: '1rem 0' }} />
        </form>
        <Button fullWidth variant="contained" color="primary">
          Sign In With Google
        </Button>
      </div>
    </Container>
  );
};

export default login;
