import React, { useEffect, FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Head from "../common/Head/Head";
import BottomJs from "../common/BottomJs/BottomJs";
import Hero from "../components/Hero/Hero";
import Presentation from "../components/Home/Presentation";
import Main from "../common/Main/Main";
import Header from "../common/Header/Header";
import EventHome from "../components/Events/EventHome";

const Home: FunctionComponent = () => {
  return (
    <>
      <Head />
      <Header home />
      <Main>
        <Hero />
        <Presentation />
        <EventHome />
        <BottomJs />
      </Main>
      <Footer />
    </>
  );
};

export default Home;

/*
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Main from "../components/Main/Main";
import ContentMain from "../components/Main/ContentMain";
import OfficeHome from "../components/Three/OfficeHome";
import SkillHome from "../components/Skill/SkillHome";
import AboutHome from "../components/About/AboutHome";
import TopHome from "../components/About/TopHome";
import Divider from "../components/Utils/Divider";
import DemoHome from "../components/Demo/DemoHome";
import ProjectHome from "../components/Project/ProjectHome";
import Footer from "../components/Footer/Footer";
import LoadingHome from "../components/Loading/LoadingHome";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { Context } from "../context";

const Home = (props) => {
  return (
    <>
      <title>Events frontend</title>
      <LoadingHome />
      <motion.div
        initial={{ opacity: 0.6, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.6 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <Main>
          <ContentMain>
            <CookieConsent
              location="bottom"
              buttonText="Accept cookie"
              cookieName="myAwesomeCookieName2"
              style={{ background: "#b13a33" }}
              buttonStyle={{
                color: "#333",
                background: "#fff",
                fontSize: "14px",
              }}
              expires={150}
            >
              This website uses cookies to enhance the user experience and not
              collect tracking cookies.{" "}
            </CookieConsent>
            <OfficeHome />
            <TopHome />
            <AboutHome />
            <SkillHome />
            <ProjectHome />
            <DemoHome />
            <Footer />
          </ContentMain>
        </Main>
      </motion.div>
    </>
  );
};

export default Home;
*/
