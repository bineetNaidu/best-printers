import { GetStaticProps } from 'next';
import ApiDataType from '../../types/ApiDataTypes';
import { baseUrl } from '../../config';
import { useRouter } from 'next/router';
import Error from 'next/error';
import HeroImage from '../../components/printersPage/HeroImage';
import DescriptionBlock from '../../components/printersPage/DescriptionBlock';
import ProsAndCons from '../../components/printersPage/ProsAndCons';

interface Props {
  printer: ApiDataType;
}

const printerId: React.FC<Props> = ({ printer }) => {
  const { isFallback } = useRouter();

  if (!isFallback && !printer) {
    return <Error statusCode={404} title="This tweet could not be found" />;
  }
  return (
    <div>
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
  const printer: ApiDataType = await res.json();
  return {
    props: {
      printer,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${baseUrl}/api/printers`);
  const printers: ApiDataType[] = await res.json();
  const pathDirs = printers.map((p) => ({ params: { id: p._id } }));
  return {
    paths: pathDirs,
    fallback: false,
  };
};

export default printerId;
