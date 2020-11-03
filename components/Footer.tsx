import styles from './Footer.module.css';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Footer: React.FC = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__left}>
          <img src="/joinus.png" className={styles.footer__img} />
          <h1>Follow</h1>
          <div className={styles.footer__followLinks}>
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
        <div className={styles.footer__right}>
          <form>
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
        </div>
      </div>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
        {` `}
        BestPrinters.in
      </Typography>
    </>
  );
};

export default Footer;
