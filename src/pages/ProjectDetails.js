import React from "react";
import { motion } from "framer-motion";
import ProjectDetails from "../components/Project/ProjectDetails";
import Footer from "../components/Footer/Footer";
import OfficeTitle from "../components/Three/OfficeTitle";
import LoadingHome from "../components/Loading/LoadingHome";

const ProjectPage = () => {
  return (
    <>
      <title>Davide Balice - Projects</title>
      <LoadingHome />
      <motion.main
        initial={{ opacity: 0.6, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.6 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <OfficeTitle
          text="Projects"
          text2="Some projects developed in recent years"
        />
        <ProjectDetails />
        <Footer />
      </motion.main>
    </>
  );
};

export default ProjectPage;
