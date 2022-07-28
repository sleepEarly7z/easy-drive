import React, { useMemo, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {withScriptjs, withGoogleMap} from "react-google-maps";
import "./StudentMap.scss";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';




export default function StudentMap(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA_-GRrfKO0phA9S28YpLrmeGZFvH3Jjgk",
  });

  const[lat, setLat] = useState(0);
  const[lng, setLng] = useState(0);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');


  useEffect(() => {
    const getLocation = async () => {
      console.log(street);
      const streeturl = street.split(' ').join('+');
      const cityurl = city.split(' ').join('+');
      const provinceurl = province.split(' ').join('+');
      const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${streeturl},+${cityurl},+${provinceurl}&key=AIzaSyA_-GRrfKO0phA9S28YpLrmeGZFvH3Jjgk`)
      .then((res) =>{
          setLat(res.data.results[0].geometry.location.lat);
          setLng(res.data.results[0].geometry.location.lng);
      }).catch((err) => {
        alert(err);
      }
      );
    }


    const fetchData = async () => {
      const res = await axios.get('https://easy-drive-405found.herokuapp.com/students/62d761535c08a0f631db58a0')
      .then((res) =>{
          console.log(res)
          setStreet(res.data.data.street);
          setCity(res.data.data.city);
          setProvince(res.data.data.province);
      }).catch((err) => {
        alert(err);
      }
      );
    }
    fetchData()
    .then(() => {
      getLocation();
    })
  }, []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Modal show={props.showBoolean} onHide={props.onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Following</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Map street = {props.street} city={props.city} province={props.province} lat={lat} lng={lng}/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={props.onClose}>
        Go back
      </Button>
    </Modal.Footer>
  </Modal>
  
  );
}

function Map(props) {
  const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), []);
  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
    <Marker position={center} />
  </GoogleMap>
    // withScriptjs(withGoogleMap((props) => (
    //         <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
    //     <Marker position={center} />
    //   </GoogleMap>)))


  );
}