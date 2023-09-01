import React from "react";
import { BACKEND_URL } from "../../config";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./Modal.module.css";
import parse from "html-react-parser";
import { NavLink } from "react-router-dom";

const ModalWindow = ({ show, handleShow, handleClose, data }) => {
  const categoryName = data.category?.name || "";

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className={classes.modal}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {data.end !== null ? `${data.start} - ${data.end}` : data.start}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={classes.modalBody}>
          <div className={classes.modalCol1}>
            <img
              src={`${BACKEND_URL}/assets/images/events/${data.imageCover}`}
              className="w-100"
              alt="event"
              onError={(e) => {
                e.target.src = `${BACKEND_URL}/assets/images/placeholder.jpg`;
              }}
            />
            <NavLink
              to={`/event/${data.slug}`}
              className="nav-link smooth-scroll mt-2 mb-2"
            >
              <Button className={classes.button}>Details</Button>
            </NavLink>
          </div>
          <div className={classes.modalCol2}>
            <Form>
              <h5>{data.title}</h5>
              <h6 className={classes.category}>{categoryName}</h6>
              <p className={classes.summary}>
                {data.summary ? parse(data.summary) : null}
              </p>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalWindow;
