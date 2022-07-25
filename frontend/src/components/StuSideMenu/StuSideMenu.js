import * as React from 'react';
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import StudentMap from '../StudentMap/StudentMap';
import axios from 'axios';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function StuSideMenu({section1, section2}) {
    const [show, setShow] = useState(false);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    useEffect(() => {
        const res = axios.get('http://localhost:3001/students/62d761535c08a0f631db58a0')
        .then((res) =>{
            setStreet(res.data.data.street);
            setCity(res.data.data.city);
            setProvince(res.data.data.province);
        }).catch((err) => {
          alert(err);
        }
        );
    })

  const scrollToSection = (elementRef) => {
    window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
    })
}

    const handleClick = async (event) => {

        setShow(!show);
        console.log(show);
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
        <ListItemText primary="Show Map" onClick={handleClick}/>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Student More" />
      </ListItem>
    </List>
    <StudentMap showBoolean={show} onClose = {() => setShow(false)}/>
    </>
  );
}
