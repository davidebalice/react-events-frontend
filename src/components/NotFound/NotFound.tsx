import React, { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./NotFound.module.css";

const NotFound: FunctionComponent = () => {
  return (
    <>
      <Container className="text-center">
        <Row>
          <Col>
            <h1 className={classes.Name}>Page not Found</h1>
            <h1 className={classes.notfound}>404</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
