import React, { FunctionComponent } from "react";
import Footer from "../common/Footer/Footer";
import LoadingHome from "../common/Loading/LoadingHome";
import Head from "../common/Head/Head";
import Main from "../common/Main/Main";
import Conctacts from "../components/Contacts/Contacts";
import Text from "../components/Calendar/Text";
import Header from "../common/Header/Header";
import Banner from "../components/Hero/Banner";
import Spacer from "../components/Utils/Spacer";
import Divider from "../components/Utils/Divider";
import contact from "../assets/images/contact.jpg";

const Contacts: FunctionComponent = () => {
  return (
    <>
      <title>Events Calendar</title>
      <Head />
      <Header home={false} />
      <Banner
        img={contact}
        text="Contacts"
        link="Contacts"
        title=""
        booking={false}
        detail={false}
      />
      <Spacer height={70} />
      <Main>
        <LoadingHome />
        <Conctacts />
        <Spacer height={170} />
      </Main>
      <Footer />
    </>
  );
};

export default Contacts;
