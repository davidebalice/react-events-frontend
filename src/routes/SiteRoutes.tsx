import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "../common/ScrollToTop/ScrollToTop";
import Home from "../pages/Home";
import Calendar from "../pages/Calendar";
/*
import Contact from "../pages/Contact";
import AboutMe from "../pages/AboutMe";
import Demo from "../pages/Demo";
import DemoDetails from "../pages/DemoDetails";
import Project from "../pages/Project";
import ProjectDetails from "../pages/ProjectDetails";
*/

import PageNotFound from "../pages/NotFound";

interface RoutesProps {}

const SiteRoutes: React.FC<RoutesProps> = (props) => {
  const location = useLocation();
  return (
    <ScrollToTop>
      <Routes key={location.pathname} location={location}>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </ScrollToTop>
  );
};
export default SiteRoutes;
/*
  <Route path="/demo" element={<Demo />} />
          <Route path="/demo/:slug" element={<DemoDetails />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
*/
