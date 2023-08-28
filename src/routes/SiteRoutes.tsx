import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "../common/ScrollToTop/ScrollToTop";
import Home from "../pages/Home";
import Calendar from "../pages/Calendar";
import Events from "../pages/Events";
import EventDetails from "../pages/EventDetails";
import Booking from "../pages/Booking";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import PageNotFound from "../pages/NotFound";

interface RoutesProps {}

const SiteRoutes: React.FC<RoutesProps> = (props) => {
  const location = useLocation();
  return (
    <ScrollToTop>
      <Routes key={location.pathname} location={location}>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:slug" element={<EventDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </ScrollToTop>
  );
};
export default SiteRoutes;
