import React from "react";
import { motion } from "framer-motion";
import Demo from "../components/Demo/Demo";
import Footer from "../components/Footer/Footer";
import OfficeTitle from "../components/Three/OfficeTitle";
import LoadingHome from "../components/Loading/LoadingHome";

const DemoPage = () => {
  return (
    <>
      <title>Davide Balice - Demo</title>
      <LoadingHome />
      <motion.main
        initial={{ opacity: 0.6, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.6 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <OfficeTitle
          text="Demo"
          text2="Full systems demo, backend access, source code"
        />
        <Demo />
        <Footer />
      </motion.main>
    </>
  );
};

export default DemoPage;
