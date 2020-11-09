import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './PrinterCard.module.css';
import { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import Chip from '@material-ui/core/Chip';
import ApiDataType from '../types/ApiDataTypes';
import Link from 'next/link';

const PrinterCard: React.FC<ApiDataType> = ({
  id,
  name,
  para1,
  heroImage,
  price,
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Card className={styles.productCard}>
      {loading ? (
        <Box pt={0.5}>
          <Skeleton variant="rect" width="100%" height={118} />
          <Skeleton />
          <Skeleton />
        </Box>
      ) : (
        <>
          <CardActionArea>
            <CardMedia
              className={styles.productCard__img}
              image={`https://the-best-printers-api-server.herokuapp.com${heroImage[0].url}`}
              title={name}
            />
            <Chip
              variant="default"
              color="secondary"
              className={styles.productCard__chip}
              label={'₹ ' + price}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {para1.substring(0, 50)}...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              <Link href={`/printer/${id}`}>View</Link>
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
};

export default PrinterCard;
