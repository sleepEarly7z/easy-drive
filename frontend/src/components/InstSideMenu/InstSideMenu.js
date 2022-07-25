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

export default function InstSideMenu({section1, section2}) {

  const scrollToSection = (elementRef) => {
    window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
    })
}

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button onClick={() => scrollToSection(section1)}>
        <ListItemText primary="Edit profile" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="See reviews" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Show Map" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="More" />
      </ListItem>
    </List>
  );
}
