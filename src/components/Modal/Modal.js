import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./Modal.module.css";

const ModalWindow = ({ show, handleShow, handleClose, data }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className={classes.modal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {data.end !== null ? `${data.start} - ${data.end}` : data.start}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        imageCover: {data.imageCover}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              <Form.Control type="datetime-local" defaultValue={data.start} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} value={data.title} />{" "}
            </Form.Group>
            <Button>Details</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalWindow;
