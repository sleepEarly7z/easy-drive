import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import StudentMap from '../StudentMap/StudentMap';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function StuSideMenu({ section1, section2 }) {
  const [show, setShow] = useState(false);


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  const handleClick = async (event) => {
    setShow(!show);
  }


  return (
    <>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button onClick={() => scrollToSection(section1)}>
          <ListItemText primary="Edit profile" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="See reviews" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Show Map" onClick={handleClick} />
        </ListItem>
        <Divider light />
      </List>
      <StudentMap showBoolean={show} onClose={() => setShow(false)} />
    </>
  );
}
