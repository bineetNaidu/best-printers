import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from '../../styles/adminIndex.module.css';

const index: React.FC = () => {
  return (
    <Container className={styles.adminIndex}>
      <Grid container>
        <Grid item xs>
          <Paper elevation={1}>
            <h1>Left</h1>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper elevation={1}>
            <h1>Right</h1>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default index;
