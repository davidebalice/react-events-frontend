import React, { FunctionComponent, useState } from "react";
import Footer from "../common/Footer/Footer";
import { EventData, Event } from "../components/Events/types";
import LoadingHome from "../common/Loading/LoadingHome";
import Head from "../common/Head/Head";
import Main from "../common/Main/Main";
import EventsContainer from "../components/Events/Events";
import Search from "../components/Events/Search";
import Header from "../common/Header/Header";
import Banner from "../components/Hero/Banner";
import Spacer from "../components/Utils/Spacer";
import Divider from "../components/Utils/Divider";
import eventsPhoto from "../assets/images/events.jpg";

const Events: React.FC = () => {
  const [results, setResults] = useState<Event[]>([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const resultHandler = (results: Event[]) => {
    setResults(results);
  };

  const loadingHandler = (
    loadingSearch: boolean | ((prevState: boolean) => boolean)
  ) => {
    setLoadingSearch(loadingSearch);
  };

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
        <Search onResults={resultHandler} onLoading={loadingHandler} />
        <Spacer height={20} />
        <EventsContainer results={results} loadingSearch={loadingSearch} />
      </Main>
      <Footer />
    </>
  );
};

export default Events;
