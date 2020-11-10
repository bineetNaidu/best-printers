import styles from './Footer.module.css';
import Typography from '@material-ui/core/Typography';
import { memo } from 'react';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
        {` `}
        BestPrinters.in
      </Typography>
    </div>
  );
};

export default memo(Footer);
