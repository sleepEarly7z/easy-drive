import React, { useMemo } from "react";
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

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Modal show={props.showBoolean} onHide={props.onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Following</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Map/>
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
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
    <Marker position={center} />
  </GoogleMap>
    // withScriptjs(withGoogleMap((props) => (
    //         <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
    //     <Marker position={center} />
    //   </GoogleMap>)))


  );
}