import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './PrinterCard.module.css';

interface Props {
  id: string;
  name: string;
  description: string;
  url: string;
  createdAt: string | Date;
  reviews?: any[];
}

const PrinterCard: React.FC<Props> = ({ name, url, description }) => {
  return (
    <Card className={styles.productCard}>
      <CardActionArea>
        <CardMedia
          className={styles.productCard__img}
          image={url}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description.substring(0, 50)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default PrinterCard;
