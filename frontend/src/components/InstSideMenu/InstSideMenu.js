import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function InstSideMenu() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Edit profile" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="See reviews" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Change Password" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="More" />
      </ListItem>
    </List>
  );
}
