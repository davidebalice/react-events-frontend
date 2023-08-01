import React, { useState, useEffect } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Container } from "react-bootstrap";
import classes from "./Calendar.module.css";
import apiUrls from "../../apiConfig";

interface Event {
  title: string;
  date?: string;
  start?: string;
  end?: string;
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  /*
  const events2 = [
    { title: "Evento 1", date: "2023-07-19" },
    { title: "Evento 2", start: "2023-07-20", end: "2023-07-24" },
  ];
*/
  useEffect(() => {
    axios
      .get(apiUrls.getEvents)
      .then((response) => {
        const apiEvents: Event[] = response.data.events;
        console.log(response.data.events);
        const transformedData: Event[] = apiEvents.map((event: any) => {
          const { name, typeDate, startDate, endDate } = event;
          if (typeDate === "single") {
            return {
              title: name,
              date: startDate,
            };
          } else if (typeDate === "range") {
            return {
              title: name,
              start: startDate,
              end: endDate,
            };
          } else {
            return {
              title: name,
              date: undefined,
              start: undefined,
              end: undefined,
            };
          }
        });
        setEvents(transformedData);
      })
      .catch((error) => {
        console.error("Errore nella chiamata API:", error);
      });
  }, []);

  console.log(events);

  return (
    <Container fluid className={classes.calendarContainer}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </Container>
  );
};

export default Calendar;
