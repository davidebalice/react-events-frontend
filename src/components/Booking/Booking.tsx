import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { backendURL } from "../../context";
import { Event } from "../Events/types";
import Spacer from "../Utils/Spacer";
import classes from "../Events/Details.module.css";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdLocationOn, MdOutlinePriceChange } from "react-icons/md";
import { BsFillCartPlusFill } from "react-icons/bs";
import parse from "html-react-parser";
import { format, parseISO } from "date-fns";
import Side from "../Events/Side";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import apiUrls from "../../apiConfig";
import { Stripe, StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

interface BookingProps {
  eventData: Event;
}

const Booking: FC<BookingProps> = ({ eventData }) => {
  eventData.total = eventData.price;
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null>>(
    Promise.resolve(null)
  );

  useEffect(() => {
    const initializeStripe = async () => {
      const stripeLoaded = await loadStripe("pk_test_TYzwqWFzGv4o5AcWDgEX1SNN");
      setStripePromise(Promise.resolve(stripeLoaded));
    };

    initializeStripe();
  }, []);

  const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState("");

    const formattedStart = format(parseISO(eventData.startDate), "yyyy-MM-dd");

    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      quantity: 1,
      date: formattedStart,
      total: eventData.price,
    });

    const handleInputChange = (event: {
      target: { name: any; value: any };
    }) => {
      const { name, value } = event.target;
      const newQuantity =
        name === "quantity" ? parseInt(value, 10) : formData.quantity;
      const newTotal = eventData.price * newQuantity;
      eventData.total = newTotal;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        total: newTotal,
      }));
    };

    const handleSubmit = async (event: { preventDefault: () => void }) => {
      event.preventDefault();

      try {
        const response = await axios.post(apiUrls.postBooking, formData);
        console.log("Data saved:", response.data);
      } catch (error) {
        console.error("Error during save:", error);
      }
      console.log(formData);

      if (elements == null) {
        return;
      }

      const { error: submitError } = await elements.submit();
      if (submitError) {
        if (submitError.message !== undefined) {
          setErrorMessage(submitError.message);
        }
        return;
      }

      const response = await axios.post(apiUrls.postStripeIntent, {
        amount: formData.total,
        currency: "eur",
      });

      const { clientSecret } = response.data;

      if (stripe) {
        const { error } = await stripe.confirmPayment({
          elements,
          clientSecret,
          confirmParams: {
            return_url: "https://example.com/order/123/complete",
          },
        });

        if (error) {
          // This point will only be reached if there is an immediate error when
          // confirming the payment. Show error to your customer (for example, payment
          // details incomplete)
          if (error.message !== undefined) {
            setErrorMessage(error.message);
          }
        } else {
          // Your customer will be redirected to your `return_url`. For some payment
          // methods like iDEAL, your customer will be redirected to an intermediate
          // site first to authorize the payment, then redirected to the `return_url`.
        }
      }
      
    };

    return (
      <form onSubmit={handleSubmit}>
        <Container className={classes.formContainer}>
          <Row className={classes.formRowTop}>
            <Col md={3}>
              {" "}
              <img
                src={`${backendURL}/assets/images/events/${eventData.imageCover}`}
                alt={eventData.name}
                className="img-fluid"
              />
            </Col>
            <Col md={9}>
              <h5>{eventData.name}</h5>
              <p className={classes.summary}>
                {eventData.summary ? parse(eventData.summary) : null}
              </p>
            </Col>
          </Row>
        </Container>
        <Container className={classes.formContainer}>
          <Row className={classes.formRow}>
            <Col md={6}>
              <Form.Group controlId="firstName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={classes.field}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="lastName">
                <Form.Label>Cognome</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={classes.field}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className={classes.formRow}>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={classes.field}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="phone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={classes.field}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className={classes.formRow}>
            <Col md={6}>
              <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  as="select"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className={classes.field}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formattedStart}
                  min={formattedStart}
                  max={formattedStart}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className={classes.total}>
            <span className={classes.totalSx}>Total</span>
            <span className={classes.totalDx}>{formData.total}</span>
          </Row>
        </Container>
        <PaymentElement />
        <button type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
        {/* Show error message to your customers */}
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    );
  };

  const options: StripeElementsOptions = {
    locale: "auto",
    mode: "payment",
    amount: eventData.total,
    currency: "eur",
  };

  return (
    <>
      <div className={`${classes.bgDetails}`}>
        <Spacer height={110} />
        {eventData && (
          <div className="container section-title" data-aos="fade-up">
            <div className={`${classes.detailsPage}`}>
              <div className={`${classes.column} ${classes.column1}`}>
                <Container className={classes.formContainerTop}>
                  <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm />
                  </Elements>
                </Container>
              </div>
              <div className={`${classes.column} ${classes.column3}`}>{""}</div>
              <div className={`${classes.column} ${classes.column2}`}>
                <Side eventData={eventData} booking={false} />
              </div>
            </div>
          </div>
        )}
        <Spacer height={100} />
      </div>
    </>
  );
};

export default Booking;
