import React from 'react'
import {motion} from "framer-motion";
import PageTop from '../components/PageTop/PageTop';
import NotFound from '../components/NotFound/NotFound';
import Footer from '../common/Footer/Footer';

      
const AboutUs = () => {
  return (
    <>
    <motion.main
          initial={{ opacity: 0.6, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.6 }}
          transition={{ duration: 0.4 }}
      >
        <title>Website Demo - Not found</title>
        <PageTop pageTitle="" />
        <NotFound/>
        <Footer/>
    </motion.main>
    </>
  )
}

export default AboutUs