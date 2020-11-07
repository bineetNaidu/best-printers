import PrinterCard from '../components/PrinterCard';
import useFirestore from '../hooks/useFirestore';
import Container from '@material-ui/core/Container';
import styles from '../styles/index.module.css';

const index = () => {
  const { docs } = useFirestore('printers');
  return (
    <Container>
      <div className={styles.home}>
        {docs && docs.map((p) => <PrinterCard key={p.id} {...p} />)}
      </div>
    </Container>
  );
};

export default index;
