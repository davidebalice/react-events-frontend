import React, { FC } from "react";
import { backendURL } from "../../context";
import { Event } from "./types";
import Spacer from "../Utils/Spacer";
import classes from "./Details.module.css";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdLocationOn, MdOutlinePriceChange } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import parse from "html-react-parser";
import { format, parseISO } from "date-fns";

interface DetailsProps {
  eventData: Event;
}

const Details: FC<DetailsProps> = ({ eventData }) => {
  const formattedStart = format(parseISO(eventData.startDate), "dd/MM/yyyy");
  const formattedEnd = eventData.endDate
    ? format(parseISO(eventData.endDate), "dd/MM/yyyy")
    : null;

  return (
    <>
      <div className={`${classes.bgDetails}`}>
        <Spacer height={110} />
        {eventData && (
          <div className="container section-title" data-aos="fade-up">
            <div className={`${classes.detailsPage}`}>
              <div className={`${classes.column} ${classes.column1}`}>
                <img
                  src={`${backendURL}/assets/images/events/${eventData.imageCover}`}
                  alt={eventData.name}
                  className="img-fluid"
                />
                <p className={classes.description}>
                  {eventData.description ? parse(eventData.description) : null}
                </p>
              </div>
              <div className={`${classes.column} ${classes.column3}`}>{""}</div>
              <div className={`${classes.column} ${classes.column2}`}>
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
                  <p className={classes.text}>aaaaaaaaaaaaaaaaaaaa</p>
                </div>

                <div className={classes.row}>
                  <div className={classes.iconContainer}>
                    <BsFillCartPlusFill className={classes.icon} />
                  </div>
                  <p className={classes.text}>aaaaaaaaaaaaaaaaaaaa</p>
                </div>
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
