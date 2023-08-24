import React, { FunctionComponent } from "react";
import Footer from "../common/Footer/Footer";
import LoadingHome from "../common/Loading/LoadingHome";
import Head from "../common/Head/Head";
import Main from "../common/Main/Main";
import EventCalendar from "../components/Calendar/Calendar";
import Text from "../components/Calendar/Text";
import Header from "../common/Header/Header";
import Banner from "../components/Hero/Banner";
import Spacer from "../components/Utils/Spacer";
import Divider from "../components/Utils/Divider";
import calendar from "../assets/images/calendar.jpg";

const Calendar: FunctionComponent = () => {
  return (
    <>
      <title>Events Calendar</title>
      <Head />
      <Header home={false} />
      <Banner img={calendar} text="Events calendar" />
      <Spacer height={70} />
      <Main>
        <LoadingHome />
        <Text />
        <Divider />
        <Spacer height={80}/>
        <EventCalendar />
      </Main>
      <Footer />
    </>
  );
};

export default Calendar;
