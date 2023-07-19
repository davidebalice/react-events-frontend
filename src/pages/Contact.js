import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import OfficeTitle from "../components/Three/OfficeTitle";
import LoadingHome from "../components/Loading/LoadingHome";

const ContactPage = () => {
  return (
    <>
      <title>Davide Balice - Contacts</title>
      <LoadingHome />
      <motion.main
        initial={{ opacity: 0.6, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.6 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <OfficeTitle text="Contacts" text2="Contact me for collaboration" />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
};

export default ContactPage;
