import React, { FC, useEffect, useRef, useState, useMemo } from "react";
import Spacer from "../Utils/Spacer";
import classes from "./Details.module.css";
import GoogleMap from "google-maps-react-markers";
import mapOptions from "./map-options.json";
import Marker from "./Marker";

const Map = ({ eventData }) => {
  const coordinates = useMemo(
    () => [
      [
        {
          lat: eventData.location.coordinates[1],
          lng: eventData.location.coordinates[0],
          name: eventData.location.description,
        },
      ],
    ],
    []
  );

  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  const [mapBounds, setMapBounds] = useState({});
  const [usedCoordinates, setUsedCoordinates] = useState(0);
  const [currCoordinates, setCurrCoordinates] = useState(
    coordinates[usedCoordinates]
  );
  const [highlighted, setHighlighted] = useState(null);

  const onGoogleApiLoaded = ({ map, maps }) => {
    mapRef.current = map;
    setMapReady(true);
  };

  const onMarkerClick = (e, { markerId, lat, lng }) => {
    setHighlighted(markerId);
  };

  const onMapChange = ({ bounds, zoom }) => {
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();

    setMapBounds({
      ...mapBounds,
      bounds: [sw.lng(), sw.lat(), ne.lng(), ne.lat()],
      zoom,
    });
    setHighlighted(null);
  };

  const updateCoordinates = () => setUsedCoordinates(!usedCoordinates ? 1 : 0);

  useEffect(() => {
    setCurrCoordinates(coordinates[usedCoordinates]);
  }, [coordinates, usedCoordinates]);

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
                <GoogleMap
                  apiKey=""
                  defaultCenter={{
                    lat: eventData.location.coordinates[1],
                    lng: eventData.location.coordinates[0],
                  }}
                  defaultZoom={8}
                  options={mapOptions}
                  mapMinHeight="600px"
                  onGoogleApiLoaded={onGoogleApiLoaded}
                  onChange={onMapChange}
                >
                  {currCoordinates.map(({ lat, lng, name }, index) => (
                    <Marker
                      key={index}
                      lat={lat}
                      lng={lng}
                      markerId={name}
                      onClick={onMarkerClick}
                      className="marker"
                      // draggable={true}
                      // onDragStart={(e, { latLng }) => {}}
                      // onDrag={(e, { latLng }) => {}}
                      // onDragEnd={(e, { latLng }) => {}}
                    />
                  ))}
                </GoogleMap>
                {highlighted && (
                  <div className={classes.highlighted}>
                    {highlighted}{" "}
                    <button
                      type="button"
                      onClick={() => setHighlighted(null)}
                      className={classes.closeButton}
                    >
                      X
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Map;
