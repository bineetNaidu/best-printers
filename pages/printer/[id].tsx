import { useState, useEffect, memo } from 'react';
import { GetStaticProps } from 'next';
import ApiDataType from '../../types/ApiDataTypes';
import { baseUrl } from '../../config';
import { useRouter } from 'next/router';
import Error from 'next/error';
import HeroImage from '../../components/printersPage/HeroImage';
import DescriptionBlock from '../../components/printersPage/DescriptionBlock';
import ProsAndCons from '../../components/printersPage/ProsAndCons';
import styles from '../../styles/printerId.module.css';

interface Props {
  printerData: ApiDataType;
}

const printerId: React.FC<Props> = ({ printerData }) => {
  const { isFallback } = useRouter();
  const [printer, setPrinter] = useState(printerData);

  useEffect(() => {
    setPrinter(printerData);
  }, [printerData, setPrinter, printer]);

  if (!isFallback && !printer) {
    return <Error statusCode={404} />;
  }
  return (
    <div className={styles.printerId}>
      <HeroImage heroImage={printer.heroImage} />
      <h1>{printer.name}</h1>
      <DescriptionBlock paragraph={printer.para1} image={printer.img1} />
      <DescriptionBlock
        paragraph={printer.para2}
        image={printer.img2}
        dir="invert"
      />
      <DescriptionBlock paragraph={printer.para3} image={printer.img3} />
      <ProsAndCons pros={printer.pros} cons={printer.cons} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`${baseUrl}/api/printers/${id}`);
  const printerData: ApiDataType = await res.json();
  return {
    props: {
      printerData,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default memo(printerId);
