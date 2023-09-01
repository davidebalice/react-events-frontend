import React, { useState, useEffect } from "react";
import classes from "./Card.module.css";

interface EventsProps {
  results: Event[];
  loadingSearch: boolean;
}

const Text: React.FC = () => {
  return (
    <section className="p-0">
      <div className="container section-title" data-aos="fade-up">
        <h2>Upcoming events</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
    </section>
  );
};

export default Text;
