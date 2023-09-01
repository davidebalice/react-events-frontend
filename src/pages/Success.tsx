import React, { useState, useEffect, FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../common/Footer/Footer";
import LoadingHome from "../common/Loading/LoadingHome";
import Head from "../common/Head/Head";
import Header from "../common/Header/Header";
import Spacer from "../components/Utils/Spacer";
import apiUrls from "../config";
import classes from "../components/Events/Details.module.css";

const Success: FunctionComponent = () => {
  const [success, setSuccess] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchSuccess = async () => {
      try {
        const response = await axios.post(`${apiUrls.postBookingSuccess}`, {
          paid: true,
          id,
        });
        setSuccess(true);
      } catch (error) {
        console.error("Err:", error);
      }
    };
    fetchSuccess();
  }, []);

  return (
    <>
      <title>Booking success</title>
      <Head />
      <Header home={false} />

      <div className="bgDetails">
        {success && (
          <>
            <Spacer height={100} />
            <div className={classes.success}>
              <b style={{ fontSize: "22px" }}>Booking saved</b>
              <br />
              <br />
              The booking was saved correctly and the payment was successful
            </div>
            <Spacer height={100} />
          </>
        )}
        <LoadingHome />
      </div>
      <Footer />
    </>
  );
};

export default Success;
