import { FunctionComponent } from "react";
import BottomJs from "../common/BottomJs/BottomJs";
import Footer from "../common/Footer/Footer";
import Head from "../common/Head/Head";
import Header from "../common/Header/Header";
import LoadingHome from "../common/Loading/LoadingHome";
import Main from "../common/Main/Main";
import EventHome from "../components/Events/EventHome";
import Hero from "../components/Hero/Hero";
import Presentation from "../components/Home/Presentation";
import Testimonials from "../components/Home/Testimonials";

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
        <BottomJs />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
