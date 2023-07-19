import React, { useEffect, useContext } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import classes from "./PageTop.module.css";
import { Context } from "../../context";

const PageTop: React.FC = (props) => {
  const { setFirstRoute } = useContext(Context);
  useEffect(() => {
    setFirstRoute(false);
  }, []);

  return (
    <>
      <Container fluid={true} className={classes.topFixedPage + " p-0 g-0"}>
        <div className={classes.topPageOverlay}></div>
      </Container>
    </>
  );
};

export default PageTop;
