import { memo } from 'react';
import styles from '../styles/contact.module.css';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const about: React.FC = () => {
  return (
    <div className={styles.about}>
      <form className={styles.about__form}>
        <h1>
          Contact us
          <small>Report Bugs*</small>
        </h1>
        <TextField
          color="primary"
          margin="normal"
          label="Name"
          variant="outlined"
        />
        <TextField
          color="primary"
          margin="normal"
          label="Email"
          variant="outlined"
        />
        <TextField
          color="primary"
          margin="normal"
          label="Message*"
          multiline
          variant="outlined"
        />
        <Button variant="outlined" color="inherit">
          Send
        </Button>
      </form>
      <div className={styles.about__follows}>
        <img src="/joinus.png" className={styles.about__img} />
        <h1>Follow</h1>
        <div className={styles.about__followLinks}>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default memo(about);
