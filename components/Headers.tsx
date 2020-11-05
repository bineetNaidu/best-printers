import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import styles from './Header.module.css';
import Link from 'next/link';
import { projectAuth } from '../firebase';
import { useRouter } from 'next/router';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useState } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

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
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles.header}>
        <div>
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
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
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        className={styles.header__drawer}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <Link href="/about">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link href="/contact">
              <ListItemIcon>
                <ContactSupportIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link href="/admin">
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </Link>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default Headers;
