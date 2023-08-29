import React, { FC, useState } from "react";
import { Event } from "./types";
import Spacer from "../Utils/Spacer";
import classes from "./Details.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import GoogleMapReact from "google-map-react";



interface MapProps {
  eventData: Event;
}

const Map: FC<MapProps> = ({ eventData }) => {
  const Marker = ({ text }: { text: string; lat: number; lng: number }) => (
    <div>
      <FontAwesomeIcon icon={faMapMarkerAlt} className={classes.marker} />
    </div>
  );

  const defaultProps = {
    center: {
      lat: 59.955413,
      lng: 30.337844,
    },
    zoom: 11,
  };

  const [markerPosition, setMarkerPosition] = useState({
    lat: 59.955413,
    lng: 30.337844,
  });

  const handleMapChange = ({
    center,
  }: {
    center: { lat: number; lng: number };
  }) => {
    setMarkerPosition({
      lat: 59.955413,
      lng: 30.337844,
    });
  };

  return (
    <div style={{ height: "450px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChange={handleMapChange}
      >
        <Marker
          lat={markerPosition.lat}
          lng={markerPosition.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;















/*

const Map: FC<MapProps> = ({ eventData }) => {

  return (
    <>
      {eventData && eventData.location.coordinates !== null && (
        <>
          <Spacer height={40} />
          <div className={`${classes.column} ${classes.column1Box}`}>
            <div className={`${classes.column} ${classes.column1Wrapper}`}>
              <div className={classes.columnTitle}>Map</div>
              <Spacer height={40} />

              <div className={classes.mapContainer}>
                <MapComponent
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=th25hwrthwtrhwrthrwthrthtr&v=3.exp&libraries=geometry,drawing,places`}
                  loadingElement={<div style={{ height: "100%" }} />}
                  containerElement={<div style={{ height: "400px" }} />}
                  mapElement={<div style={{ height: "100%" }} />}
                  lat={eventData.location.coordinates[0]}
                  lng={eventData.location.coordinates[1]}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Map;
*/
