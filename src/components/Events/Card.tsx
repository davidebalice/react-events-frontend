import React from "react";
import { CardProps } from "./types";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiSolidMap } from "react-icons/bi";
import parse from "html-react-parser";
import classes from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { BACKEND_URL } from "../../config";

const Card: React.FC<CardProps> = ({ event, delay, col }) => {
  const photo = `${BACKEND_URL}/assets/images/events/${event.imageCover}`;
  const formattedDate = new Date(event.startDate).toLocaleDateString();
  const colClass = col === 3 ? "col-xl-4 col-md-6" : "col-md-6 mb-3";

  return (
    <div
      className={`${classes.cardExternal} ${colClass}`}
      data-aos="fade-up"
      data-aos-delay={delay}
      data-delay={delay}
    >
      <NavLink
        to={`/event/${event.slug}`}
        className="nav-link smooth-scroll mt-2 mb-2"
      >
        <article className={classes.card}>
          <div
            className={
              col === 3 ? classes.imgContainer : classes.imgContainerBig
            }
          >
            {event.category && (
              <p className="post-category-abs">{event.category.name}</p>
            )}
            <img
              src={photo}
              alt={event.name}
              className="img-fluid"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.src = `${BACKEND_URL}/assets/images/placeholder.jpg`;
              }}
            />
          </div>

          <div className="d-flex align-items-center">
            <AiTwotoneCalendar className={classes.icon} />
            <span className={classes.text}>{formattedDate}</span>

            <BiSolidMap className={`${classes.icon} ms-4`} />
            <span className={classes.text}>{event.location.description}</span>
          </div>

          <h2 className={classes.title}>{event.name}</h2>

          <p className={classes.description}>
            {event.summary ? parse(event.summary) : null}
          </p>
        </article>
      </NavLink>
    </div>
  );
};

export default Card;
