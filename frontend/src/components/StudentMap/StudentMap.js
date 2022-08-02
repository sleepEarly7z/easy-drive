import React, { useMemo, useEffect, useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { withScriptjs, withGoogleMap } from 'react-google-maps'
import './StudentMap.scss'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function StudentMap(props) {
    const params = useParams()
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyA_-GRrfKO0phA9S28YpLrmeGZFvH3Jjgk',
    })

    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

    useEffect(() => {
        async function componentDidMount() {
            const firstResponce = await axios.get(
                `https://ezdrivemain.herokuapp.com/students/${params.studentId}`,
            )
            // console.log(firstResponce.data.data);
            const streeturl = firstResponce.data.data.street
                .split(' ')
                .join('+')
            const cityurl = firstResponce.data.data.city.split(' ').join('+')
            const provinceurl = firstResponce.data.data.province
                .split(' ')
                .join('+')
            const secondResponce = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${streeturl},+${cityurl},+${provinceurl}&key=AIzaSyA_-GRrfKO0phA9S28YpLrmeGZFvH3Jjgk`,
            )
            // console.log(secondResponce);
            setLat(secondResponce.data.results[0].geometry.location.lat)
            setLng(secondResponce.data.results[0].geometry.location.lng)
        }

        componentDidMount()
    }, [])

    if (!isLoaded) return <div>Loading...</div>
    return (
        <Modal show={props.showBoolean} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Following</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Map
                    street={props.street}
                    city={props.city}
                    province={props.province}
                    lat={lat}
                    lng={lng}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onClose}>
                    Go back
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

function Map(props) {
    const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), [])
    return (
        <GoogleMap
            zoom={15}
            center={center}
            mapContainerClassName="map-container"
        >
            <Marker position={center} />
        </GoogleMap>
        // withScriptjs(withGoogleMap((props) => (
        //         <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        //     <Marker position={center} />
        //   </GoogleMap>)))
    )
}
