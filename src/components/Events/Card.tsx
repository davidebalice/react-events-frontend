import React from "react";
import { CardProps } from "./types";
import { backendURL } from "../../context";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiSolidMap } from "react-icons/bi";
import parse from "html-react-parser";

const Card: React.FC<CardProps> = ({ event }) => {
  const photo = `${backendURL}/img/events/${event.imageCover}`;

  return (
    <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <article>
        <div className="post-img">
          <img src={photo} alt="" className="img-fluid" />
        </div>

        <p className="post-category">Politics</p>

        <p className="post-category">
          <AiTwotoneCalendar />
          {event.startDate}

          <BiSolidMap />
          {event.location.description}
        </p>

        <h2 className="title">
          <a href="blog-details.html">{event.name}</a>
        </h2>

        <p>{parse(event.summary)}</p>

        <div className="d-flex align-items-center">
          <img
            src="assets/img/blog/blog-author.jpg"
            alt=""
            className="img-fluid post-author-img flex-shrink-0"
          />
          <div className="post-meta">
            <p className="post-author">Maria Doe</p>
            <p className="post-date">
              <time dateTime="2022-01-01">Jan 1, 2022</time>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
