import React, { FC, useState } from "react";
import { backendURL } from "../../context";
import { NavLink } from "react-router-dom";
import { Event } from "./types";
import Spacer from "../Utils/Spacer";
import classes from "./Details.module.css";
import Side from "./Side";
import Gallery from "./Gallery";
import Map from "./Map";
import parse from "html-react-parser";

interface DetailsProps {
  eventData: Event;
}

const Details: FC<DetailsProps> = ({ eventData }) => {
  const [selectedImage, setSelectedImage] = useState("");

  const openImage = (image: string) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage("");
  };

  return (
    <>
      <div className={`${classes.bgDetails}`}>
        <Spacer height={110} />
        {eventData && (
          <div className="container section-title" data-aos="fade-up">
            <div className={`${classes.detailsPage}`}>
              <div className={`${classes.column} ${classes.column1}`}>
                <div className={`${classes.column} ${classes.column1Box}`}>
                  <img
                    src={`${backendURL}/assets/images/events/${eventData.imageCover}`}
                    alt={eventData.name}
                    className="img-fluid"
                  />
                  <p className={classes.description}>
                    {eventData.description
                      ? parse(eventData.description)
                      : null}
                  </p>
                </div>

                <Gallery eventData={eventData} />
                <Map eventData={eventData} />

                
              </div>
              <div className={`${classes.column} ${classes.column3}`}>{""}</div>
              <div className={`${classes.column} ${classes.column2}`}>
                <Side eventData={eventData} booking={true} />
              </div>
            </div>
          </div>
        )}
        <Spacer height={100} />
      </div>
    </>
  );
};

export default Details;
