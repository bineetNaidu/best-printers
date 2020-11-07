import PrinterCard from '../components/PrinterCard';
import useFirestore from '../hooks/useFirestore';
import Container from '@material-ui/core/Container';

const index = () => {
  const { docs } = useFirestore('printers');
  return (
    <Container>
      {docs && docs.map((p) => <PrinterCard key={p.id} {...p} />)}
    </Container>
  );
};

export default index;
