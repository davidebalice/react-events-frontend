import React, { FunctionComponent } from "react";
import Footer from "../common/Footer/Footer";
import LoadingHome from "../common/Loading/LoadingHome";
import Head from "../common/Head/Head";
import Main from "../common/Main/Main";
import EventCalendar from "../components/Calendar/Calendar";
import Header from "../common/Header/Header";
import Spacer from "../components/Utils/Spacer";

const Calendar: FunctionComponent = () => {
  return (
    <>
      <title>Events Calendar</title>
      <Head />
      <Header home={false} />
      <Spacer height={130} />
      <Main>
        <LoadingHome />
        <EventCalendar />
      </Main>
      <Footer />
    </>
  );
};

export default Calendar;
