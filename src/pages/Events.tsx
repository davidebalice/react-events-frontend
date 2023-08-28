import React, { FunctionComponent } from "react";
import Footer from "../common/Footer/Footer";
import LoadingHome from "../common/Loading/LoadingHome";
import Head from "../common/Head/Head";
import Main from "../common/Main/Main";
import Team from "../components/Team/Team";
import Text from "../components/Calendar/Text";
import Header from "../common/Header/Header";
import Banner from "../components/Hero/Banner";
import Spacer from "../components/Utils/Spacer";
import Divider from "../components/Utils/Divider";
import eventsPhoto from "../assets/images/events.jpg";

const Events: FunctionComponent = () => {
  return (
    <>
      <title>Events</title>
      <Head />
      <Header home={false} />
      <Banner
        img={eventsPhoto}
        text="Events"
        link="Events"
        title=""
        detail={false}
        booking={false}
      />
      <Spacer height={70} />
      <Main>
        <LoadingHome />
        <Text />
        <Divider />
        <Spacer height={80} />
        <Team />
      </Main>
      <Footer />
    </>
  );
};

export default Events;
