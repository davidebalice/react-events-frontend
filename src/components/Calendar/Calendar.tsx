import React, { useState, useEffect } from "react";
import axios from "axios";
import { EventClickArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Container } from "react-bootstrap";
import Modal from "../Modal/Modal";
import classes from "./Calendar.module.css";
import apiUrls from "../../apiConfig";

interface Event {
  title: string;
  date?: string;
  start?: string;
  end?: string;
  slug?: string;
  typeData?: string;
  imageCover?: string;
  summary?: string;
  category?: object;
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [data, setData] = useState<Event[]>([
    {
      title: "Evento 1",
      date: "2023-08-25",
      start: "09:00",
      end: "12:00",
      typeData: "tipo1",
      imageCover: "url-dell-immagine",
      slug: "url-dell-immagine",
      summary: "Descrizione dell'evento 1",
      category: {},
    },
  ]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const localDate = (date: {
    getFullYear: () => any;
    getMonth: () => number;
    getDate: () => any;
    getHours: () => any;
    getMinutes: () => any;
  }) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    axios
      .get(apiUrls.getEvents)
      .then((response) => {
        const apiEvents: Event[] = response.data.events;
        console.log(response.data.events);
        const transformedData: Event[] = apiEvents.map((event: any) => {
          const {
            name,
            typeDate,
            startDate,
            endDate,
            imageCover,
            slug,
            summary,
            category,
          } = event;
          if (typeDate === "single") {
            return {
              title: name,
              imageCover,
              slug,
              date: startDate,
              summary,
              category,
            };
          } else if (typeDate === "range") {
            return {
              title: name,
              imageCover,
              start: startDate,
              slug,
              end: endDate,
              summary,
              category,
            };
          } else {
            return {
              title: name,
              imageCover,
              date: undefined,
              start: undefined,
              slug: undefined,
              end: undefined,
              summary: undefined,
              category: undefined,
            };
          }
        });
        setEvents(transformedData);
      })
      .catch((error) => {
        console.error("Errore nella chiamata API:", error);
      });
  }, []);

  const handleEventClick = (clickInfo: EventClickArg) => {
    const { title, start, end, extendedProps } = clickInfo.event;
    const { imageCover, slug, summary, category } = extendedProps;

    const updatedData = {
      ...data,
      title: title,
      start: start !== null ? localDate(start) : null,
      end: end !== null ? localDate(end) : null,
      imageCover,
      slug,
      summary,
      category,
    };

    setData(updatedData);
    handleShow();
    let calendarApi = clickInfo.view.calendar;
    calendarApi.unselect();
  };

  return (
    <Container fluid className={classes.calendarContainer}>
      <Modal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        data={data}
      />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        selectable={true}
        selectMirror={true}
        eventClick={handleEventClick}
      />
    </Container>
  );
};

export default Calendar;
