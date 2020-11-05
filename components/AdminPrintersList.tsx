import React from 'react';
import PrintIcon from '@material-ui/icons/Print';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';
import styles from './AdminPrinterList.module.css';
import useFirestore from '../hooks/useFirestore';

const AdminPrintersList = () => {
  const { docs } = useFirestore('printers');
  return (
    <Container className={styles.adminPrinterList}>
      <List>
        {docs.map((p) => (
          <ListItem key={p.id}>
            <ListItemAvatar>
              <Avatar>
                <PrintIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={p.name} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AdminPrintersList;
