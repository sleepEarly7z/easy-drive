import React, { useMemo, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {withScriptjs, withGoogleMap} from "react-google-maps";
import "./StudentMap.scss";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import qs from 'qs';




export default function StudentMap(props) {
  const params = useParams();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA_-GRrfKO0phA9S28YpLrmeGZFvH3Jjgk",
  });

  const[lat, setLat] = useState(0);
  const[lng, setLng] = useState(0);
  const[nearbyInstructors, setNearbyInstructors] = useState([]);


  useEffect(() => {

    async function componentDidMount() {
      const firstResponce = await axios.get(`https://ezdrive-test-3.herokuapp.com/students/${params.studentId}`);
      const streeturl = firstResponce.data.data.street.split(' ').join('+');
      const cityurl = firstResponce.data.data.city.split(' ').join('+');
      const provinceurl = firstResponce.data.data.province.split(' ').join('+');
      const secondResponce = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${streeturl},+${cityurl},+${provinceurl}&key=AIzaSyA_-GRrfKO0phA9S28YpLrmeGZFvH3Jjgk`);
      setLat(secondResponce.data.results[0].geometry.location.lat);
      setLng(secondResponce.data.results[0].geometry.location.lng);
      var data = qs.stringify({
        'city': firstResponce.data.data.city,
        'street': firstResponce.data.data.street,
        'province': firstResponce.data.data.province, 
      });
      var config = {
        method: 'post',
        url: `https://yizhou-ezdrive.herokuapp.com/students/nearby/62d761535c08a0f631db58a0`,
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };
      
      const nearbyInsts = await axios(config);
      for (let i = 0; i < nearbyInsts.data.nearby.length; i++) {
        const nearbyMarks = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${nearbyInsts.data.nearby[i].instStreet},+${nearbyInsts.data.nearby[i].instCity},+${nearbyInsts.data.nearby[i].instProvince}&key=AIzaSyA_-GRrfKO0phA9S28YpLrmeGZFvH3Jjgk`);
        if (nearbyMarks.data.status !== 'ZERO_RESULTS') {
          if(nearbyMarks.data.results[0].geometry.location.lat !== undefined && nearbyMarks.data.results[0].geometry.location.lng !== undefined) {
            let inst = {
              lat: nearbyMarks.data.results[0].geometry.location.lat,
              lng: nearbyMarks.data.results[0].geometry.location.lng,
              name: nearbyInsts.data.nearby[i].instructorName,
              id: nearbyInsts.data.nearby[i].instructorID,
            }
            nearbyInstructors.push(inst);

          }
        }

      }

    }

    componentDidMount();

  }, []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Modal show={props.showBoolean} onHide={props.onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Following</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Map street = {props.street} city={props.city} province={props.province} lat={lat} lng={lng} nearby = {nearbyInstructors}/>
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
    {
          props.nearby.map(inst => {
            return <Marker position={{ lat: inst.lat, lng: inst.lng,}} title={inst.name} label = {inst.name}/>
          })
    }
  </GoogleMap>



  );
}