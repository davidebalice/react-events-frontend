import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/About/AboutMe";
import OfficeTitle from "../components/Three/OfficeTitle";
import LoadingHome from "../components/Loading/LoadingHome";

const AboutMePage = () => {
  return (
    <>
      <title>Davide Balice - About me</title>
      <LoadingHome />
      <motion.main
        initial={{ opacity: 0.6, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.6 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <OfficeTitle text="About me" text2="Some information about me" />
        <AboutMe />
        <Footer />
      </motion.main>
    </>
  );
};

export default AboutMePage;
