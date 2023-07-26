import React, { useEffect, FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Head from "../common/Head/Head";
import BottomJs from "../common/BottomJs/BottomJs";
import Hero from "../components/Hero/Hero";
import Presentation from "../components/Home/Presentation";
import Testimonials from "../components/Home/Testimonials";
import Clients from "../components/Home/Clients";
import Main from "../common/Main/Main";
import Header from "../common/Header/Header";
import EventHome from "../components/Events/EventHome";
import LoadingHome from "../common/Loading/LoadingHome";

const Home: FunctionComponent = () => {
  return (
    <>
      <LoadingHome />
      <Head />
      <Header home />
      <Main>
        <Hero />
        <Presentation />
        <EventHome />
        <Testimonials />
        <Clients />
        <BottomJs />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
