import React, { FC } from "react";
import { backendURL } from "../../context";
import { NavLink } from "react-router-dom";
import { Event } from "./types";
import Spacer from "../Utils/Spacer";
import classes from "./Details.module.css";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdLocationOn, MdOutlinePriceChange } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import { format, parseISO } from "date-fns";

interface SideProps {
  eventData: Event;
  booking: Boolean;
}

const Details: FC<SideProps> = ({ eventData, booking }) => {
  const formattedStart = format(parseISO(eventData.startDate), "dd/MM/yyyy");
  const formattedEnd = eventData.endDate
    ? format(parseISO(eventData.endDate), "dd/MM/yyyy")
    : null;
  const formattedPrice = eventData.price.toLocaleString("it-IT", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <>
      <h3 className={classes.title}>{eventData.name}</h3>
      <div className={classes.row}>
        <div className={classes.iconContainer}>
          <AiTwotoneCalendar className={classes.icon} />
        </div>
        <p className={classes.text}>
          {eventData.typeDate === "single"
            ? formattedStart
            : `${formattedStart} - ${formattedEnd}`}
        </p>
      </div>

      <div className={classes.row}>
        <div className={classes.iconContainer}>
          <MdLocationOn className={classes.icon} />
        </div>
        <p className={classes.text}>{eventData.location.description}</p>
      </div>

      <div className={classes.row}>
        <div className={classes.iconContainer}>
          <MdOutlinePriceChange className={classes.icon} />
        </div>
        <p className={classes.text}>€ {formattedPrice}</p>
      </div>
      {booking && (
        <NavLink
          to={`/booking/${eventData._id}`}
          className="nav-link smooth-scroll"
        >
          <div className={classes.bookingButton}>
            <div className={classes.iconContainer}>
              <BsFillCartPlusFill className={classes.icon} />
            </div>
            <p className={classes.text}>Booking event</p>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default Details;
