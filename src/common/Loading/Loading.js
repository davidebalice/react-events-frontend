import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LoaderIcon from '../../assets/images/loaderdb.svg';
import logo from '../../assets/images/logo.png';
import classes from './Loading.module.css'

const Loading = () => {
  return (
    <Container className="text-center">
        <Row>
            <Col>
                <img className={classes.loadingAnimation} src={LoaderIcon} />    
            </Col>
        </Row>
    </Container>
  )
}

export default Loading