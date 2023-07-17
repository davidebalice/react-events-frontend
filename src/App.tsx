import React, { useEffect, FunctionComponent } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./common/Header/Header";
import Head from "./common/Head/Head";
import BottomJs from "./common/BottomJs/BottomJs";
import Hero from "./components/Hero/Hero";
import Presentation from "./components/Home/Presentation";
import Main from "./common/Main/Main";
import AOS from "aos";
import "aos/dist/aos.css";
import "./main.css";

const App: FunctionComponent = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Head />
      <Main>
        <Header />
        <Hero />
        <Presentation />
        <BottomJs />
      </Main>
    </>
  );
};

export default App;
