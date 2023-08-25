import React, { FC } from "react";
import { backendURL } from "../../context";
import { Event } from "./types";
import Spacer from "../Utils/Spacer";
import classes from "./Details.module.css";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdLocationOn, MdOutlinePriceChange } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import parse from "html-react-parser";

interface DetailsProps {
  eventData: Event;
}

const Details: FC<DetailsProps> = ({ eventData }) => {
  return (
    <>
      <div className="bgDetails">
        {eventData && (
          <div className="container section-title" data-aos="fade-up">
            <div className="detailsPage">
              <div className="column column-1">
                <img
                  src={`${backendURL}/assets/images/events/${eventData.imageCover}`}
                  alt={eventData.name}
                  className="img-fluid"
                />
                <p className={classes.description}>
                  {eventData.description ? parse(eventData.description) : null}
                </p>
              </div>
              <div className="column column-3">{""}</div>
              <div className="column column-2">
                <h3 className={classes.title}>{eventData.name}</h3>
                <div>
                  <AiTwotoneCalendar />
                </div>
                <MdLocationOn />
                <MdOutlinePriceChange />
                <BsFillCartPlusFill />
              </div>
            </div>
          </div>
        )}
        <Spacer height={80} />
      </div>
    </>
  );
};

export default Details;
