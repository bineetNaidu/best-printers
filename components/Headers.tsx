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
import HomeIcon from '@material-ui/icons/Home';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

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
        <div className={styles.header__authLinks}>
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
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link href="/">
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <Link href="/about">
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ContactSupportIcon />
            </ListItemIcon>
            <Link href="/contact">
              <ListItemText primary="Contact Us" />
            </Link>
          </ListItem>
          {user ? (
            <>
              <ListItem button className={styles.header__breakLink}>
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <ListItemText primary={user.username} />
              </ListItem>
              <ListItem
                button
                className={styles.header__breakLink}
                onClick={handleSignOut}
              >
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </>
          ) : (
            <>
              <ListItem button className={styles.header__breakLink}>
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <Link href="/register">
                  <ListItemText primary="Register" />
                </Link>
              </ListItem>
              <ListItem button className={styles.header__breakLink}>
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <Link href="/login">
                  <ListItemText primary="Login" />
                </Link>
              </ListItem>
            </>
          )}
          <ListItem button>
            <ListItemIcon>
              <SupervisorAccountIcon />
            </ListItemIcon>
            <Link href="/admin">
              <ListItemText primary="Admin" />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <div className={styles.header__links}>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </div>
      </Drawer>
    </>
  );
};

export default Headers;
