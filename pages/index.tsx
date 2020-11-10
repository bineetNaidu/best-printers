import React, { memo } from 'react';
import PrinterCard from '../components/PrinterCard';
import Container from '@material-ui/core/Container';
import styles from '../styles/index.module.css';
import { baseUrl } from '../config';
import ApiDataType from '../types/ApiDataTypes';
import { GetStaticProps } from 'next';

interface Props {
  printers: ApiDataType[];
}

const index: React.FC<Props> = ({ printers }) => {
  return (
    <Container>
      <div className={styles.home}>
        {printers && printers.map((p) => <PrinterCard key={p.id} {...p} />)}
      </div>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${baseUrl}/api/printers`);
  const printers: ApiDataType = await res.json();
  return {
    props: {
      printers,
    },
  };
};

export default memo(index);
