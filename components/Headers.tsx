import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import styles from './Header.module.css';
import Link from 'next/link';
import { projectAuth } from '../firebase';
import { useRouter } from 'next/router';

type User = {
  username: string;
  email: string;
};

interface Props {
  user: User;
}

const Headers: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const handleSignOut = () => {
    projectAuth.signOut();
    router.push('/');
  };
  return (
    <div className={styles.header}>
      <div>
        <MenuIcon />
      </div>
      <p className={styles.header__brand}>
        <Link href="/">The BestPrinters.in</Link>
      </p>
      <div>
        {user ? (
          <>
            <Button>{user.username}</Button>
            <Button onClick={handleSignOut}>Logout</Button>
          </>
        ) : (
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Headers;
