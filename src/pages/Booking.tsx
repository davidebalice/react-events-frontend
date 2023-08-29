import React, { useState, useEffect, FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Event, EventResponse } from "../components/Events/types";
import Footer from "../common/Footer/Footer";
import LoadingHome from "../common/Loading/LoadingHome";
import Head from "../common/Head/Head";
import Header from "../common/Header/Header";
import Banner from "../components/Hero/Banner";
import Spacer from "../components/Utils/Spacer";
import Booking from "../components/Booking/Booking";
import eventsPhoto from "../assets/images/events.jpg";
import apiUrls from "../apiConfig";

const BookingDetails: FunctionComponent = () => {
  const [eventData, setEventData] = useState<Event>();
  const { id } = useParams();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get<EventResponse>(
          `${apiUrls.getEventById}/${id}`
        );
        const eventData: Event = response.data.event;
        setEventData(eventData);
      } catch (error) {
        console.error("Err:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
      {eventData && <title>{eventData.name}</title>}
      <Head />
      <Header home={false} />
      {eventData && (
        <Banner
          img={eventsPhoto}
          text={eventData.name}
          link="Events"
          title={eventData.name}
          detail={true}
          booking={true}
        />
      )}
      <div className="bgDetails">
        {eventData && <Booking eventData={eventData} />}
        <LoadingHome />
      </div>
      <Footer />
    </>
  );
};

export default BookingDetails;
