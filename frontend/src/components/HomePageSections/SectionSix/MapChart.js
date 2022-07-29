import React from 'react'
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from 'react-simple-maps'

const geoUrl =
    'https://github.com/deldersveld/topojson/blob/master/continents/north-america.json'

const markers = [
    {
        markerOffset: -30,
        name: 'Vancouver Driving School',
        coordinates: [49.263392, -123.129456],
    },
    //     {
    //         markerOffset: 15,
    //         name: 'MacDonald Driving Academy',
    //         coordinates: [49.267073715000855, -123.14884316470796],
    //     },
    //     {
    //         markerOffset: 15,
    //         name: "Johnston's Vancouver GLP Driving School",
    //         coordinates: [49.20722150766263, -123.13545357788979],
    //     },
    //     {
    //         markerOffset: 15,
    //         name: 'TOPAS Driving School',
    //         coordinates: [49.26617758783552, -123.13373696419514],
    //     },
    //     {
    //         markerOffset: 15,
    //         name: 'Vancouver Driving School',
    //         coordinates: [49.26752177248018, -123.12858712311125],
    //     },
    //     {
    //         markerOffset: 15,
    //         name: 'Atlas Driving School',
    //         coordinates: [49.26147265319294, -123.12549721846088],
    //     },
]

const MapChart = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [58, 20, 0],
                scale: 400,
            }}
        >
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#EAEAEC"
                            stroke="#D6D6DA"
                        />
                    ))
                }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates}>
                    <g
                        fill="none"
                        stroke="#FF5533"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)"
                    >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </g>
                    <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
                    >
                        {name}
                    </text>
                </Marker>
            ))}
        </ComposableMap>
    )
}

export default MapChart
