import React, { useState, useEffect } from "react";
import axios from "axios";
import { EventData, Event } from "./types";
import Card from "./Card";
import { backendURL } from "../../context";

const EventHome: React.FC = (props) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get<EventData>(
          `${backendURL}/api/v1/events/`
        );
        const filteredEvents = response.data.data.events.filter((event) => {
          const startDate = new Date(event.startDate);
          const today = new Date();
          return startDate > today;
        });
        filteredEvents.sort(
          (a, b) =>
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
        <h2>Recent Posts</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {events.map((event) => (
            <Card key={event._id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHome;
