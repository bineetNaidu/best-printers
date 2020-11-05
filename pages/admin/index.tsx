import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AdminCreateForm from '../../components/AdminCreateForm';
import AdminPrintersList from '../../components/AdminPrintersList';
import styles from '../../styles/adminIndex.module.css';

const index: React.FC = () => {
  return (
    <Container className={styles.adminIndex}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Paper elevation={1}>
            <AdminCreateForm />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper elevation={1}>
            <AdminPrintersList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default index;
