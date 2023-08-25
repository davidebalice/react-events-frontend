import React from "react";
import { CardProps } from "./types";
import { backendURL } from "../../context";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiSolidMap } from "react-icons/bi";
import parse from "html-react-parser";
import classes from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card: React.FC<CardProps> = ({ event, delay }) => {
  const photo = `${backendURL}/assets/images/events/${event.imageCover}`;
  const formattedDate = new Date(event.startDate).toLocaleDateString();

  return (
    <div
      className="col-xl-4 col-md-6"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-delay={delay}
    >
      <NavLink
        to={`/event/${event.slug}`}
        className="nav-link smooth-scroll mt-2 mb-2"
      >
        <article className={classes.card}>
          <div className="post-img">
            {event.category && (
              <p className="post-category-abs">{event.category.name}</p>
            )}
            <img
              src={photo}
              alt={event.name}
              className="img-fluid"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.src = `${backendURL}/assets/images/placeholder.jpg`;
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
