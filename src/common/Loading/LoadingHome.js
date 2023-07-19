import { getElementError } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import LoaderIcon from '../../assets/images/loaderdb.svg';
import logo from '../../assets/images/logo.png';
import classes from './Loading.module.css'

const LoadingHome = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 1000);
  }, []);

  return (
    <>
      <Container id="preloader" fluid className={classes.loadingHome + ' text-center'} 
      style={{ 
        opacity: fadeOut ? 0 : 1, transition: "opacity 1s",
        display: fadeOut ? 'none' : 'flex'
          
      }}>
          <Row>
              <Col>
                  <div className={classes.loadingContainer+' shadow'}>
                    <img className={classes.logo} src={logo} alt="logo davide balice"/>
                    <img className={classes.loadingAnimationHome} src={LoaderIcon} alt="loading davide balice"/>    
                  </div>
              </Col>
          </Row>
      </Container>
    </>
  )
}

export default LoadingHome