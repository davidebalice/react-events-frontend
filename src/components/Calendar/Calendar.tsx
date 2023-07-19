import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Calendar.module.css";
//import "@fullcalendar/daygrid/main.css";
//import "@fullcalendar/timegrid/main.css";

const Calendar: React.FC = () => {
  return (
    <Container fluid className={classes.calendarContainer}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "Evento 1", date: "2023-07-19" },
          { title: "Evento 2", date: "2023-07-20" },
        ]}
      />
    </Container>
  );
};

export default Calendar;
