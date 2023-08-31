import React, { useState, useEffect } from "react";
import axios from "axios";
import { EventData, Event } from "./types";
import Card from "./Card";
import apiUrls, { demoMode } from "../../apiConfig";
import classes from "./Card.module.css";
import Loading from "../../common/Loading/Loading";

interface EventsProps {
  results: Event[];
}

const Events: React.FC<EventsProps> = ({ results }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  if (results.length >= 1) {
    setEvents(results);
  }

  console.log("results");
  console.log(results);
  console.log(events);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get<EventData>(apiUrls.getHomeEvents);
        const filteredEvents: Event[] = response.data.events.filter(
          (event: Event) => {
            const startDate = new Date(event.startDate);
            const today = new Date();
            setLoading(false);
            if (demoMode) {
              return true;
            } else {
              return startDate >= today;
            }
          }
        );
        filteredEvents.sort(
          (a: Event, b: Event) =>
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );

        const limitedEvents = filteredEvents.slice(0, 6);
        setEvents(limitedEvents);
      } catch (error) {
        console.error("Err:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section id="recent-posts" className="recent-posts">
      <div className="container section-title" data-aos="fade-up">
        <h2>Upcoming events</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <div className={`${classes.cardContainer} row gy-6`}>
          {loading ? (
            <Loading />
          ) : (
            <>
              {events.map((event, index) => {
                const currentDelay = index * 5000;
                return (
                  <Card
                    col={2}
                    key={event._id}
                    event={event}
                    delay={currentDelay}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;