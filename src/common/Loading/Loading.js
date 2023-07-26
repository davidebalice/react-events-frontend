import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <img className={classes.loadingAnimation}  alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
