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
import about from "../assets/images/about.jpg";

const AboutPage: FunctionComponent = () => {
  return (
    <>
      <title>Events Calendar</title>
      <Head />
      <Header home={false} />
      <Banner img={about} text="About" link="About" title="" detail={false} booking={false} />
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

export default AboutPage;
