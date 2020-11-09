import React from 'react';
import styles from './ProsAndCons.module.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Card from '@material-ui/core/Card';

interface Props {
  pros: string;
  cons: string;
}

const ProsAndCons: React.FC<Props> = ({ pros, cons }) => {
  return (
    <div className={styles.prosncons}>
      <Card className={styles.prosncons__left}>
        <List
          component="li"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Pros
            </ListSubheader>
          }
        >
          <ListItem>{pros}</ListItem>
        </List>
      </Card>
      <Card className={styles.prosncons__right}>
        <List
          component="li"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Cons
            </ListSubheader>
          }
        >
          <ListItem>{cons}</ListItem>
        </List>
      </Card>
    </div>
  );
};

export default ProsAndCons;
