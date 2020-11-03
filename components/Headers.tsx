import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import styles from './Header.module.css';
import Link from 'next/link';

const Headers: React.FC = () => {
  return (
    <div className={styles.header}>
      <div>
        <MenuIcon />
      </div>
      <p className={styles.header__brand}>
        <Link href="/">The BestPrinters.in</Link>
      </p>
      <div>
        <Button>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default Headers;
