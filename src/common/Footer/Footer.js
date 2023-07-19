import React, { useState, useEffect, useMemo, useContext } from "react";
import { Col, Row, Container } from "react-bootstrap";
import classes from "./Footer.module.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Context } from "../../context.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const parse = require("html-react-parser");
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  const { debug } = useContext(Context);

  if (debug) {
    console.log("render footer");
  }
  return (
    <>
      <Container fluid={true} className={classes.Section}>
        <Container className={classes.footerContainer}>
          <Row>
            <Col lg="6" md={6} sm={12} className={classes.footerCol1}>
              <h2 className={`${classes.Name} text-left`}>Events Demo</h2>
              <p className={classes.Description}>Developer in React and Node</p>
              <a href="https://www.davidebalice.dev" target="_blank" rel="noreferrer">
                <p className={classes.Description}>www.davidebalice.dev</p>
              </a>
            </Col>

            <Col lg="6" md={6} sm={12} className={classes.footerCol2}>
              <FontAwesomeIcon
                className={classes.social}
                icon={faFacebook}
                size="2x"
              />
              <FontAwesomeIcon
                className={classes.social}
                icon={faInstagram}
                size="2x"
              />
              <FontAwesomeIcon
                className={classes.social}
                icon={faTwitter}
                size="2x"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid={true} className={`${classes.copyright} text-center`}>
        <p className={classes.copyrightlink}>© Copyright Davide Balice</p>
      </Container>
    </>
  );
};

export default Footer;
