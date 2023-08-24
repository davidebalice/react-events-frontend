import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Calendar.module.css";
import { BsCalendar3 } from "react-icons/bs";

const Text: React.FC = () => {
  return (
    <Container fluid className={classes.calendarContainer}>
      <p className={classes.title}>Events calendar</p>
      <p className={classes.text}>
        <div className={classes.lineIcon}>
          <div className={classes.boxIcon}>
            <BsCalendar3 className={classes.calendarIcon} />
          </div>
        </div>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
    </Container>
  );
};

export default Text;
