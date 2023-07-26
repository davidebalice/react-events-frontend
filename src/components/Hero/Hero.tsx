import React, { useEffect, FunctionComponent } from "react";
import classes from "./Hero.module.css";

const Hero: FunctionComponent = () => {
  const assetsPath = process.env.PUBLIC_URL + "/assets";
  return (
    <section id="hero" className="hero">
      <img src={assetsPath + "/img/hero-bg.jpg"} alt="" data-aos="fade-in" />

      <div className="container">
        <div className="row text-center">
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className={`${classes.logoContainer} mb-3`}
          >
            <img
              src={window.location.origin + "/assets/img/react_node.png"}
              alt="react + node"
              className={`${classes.logo} mb-1`}
            />
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className={`${classes.title} mb-1`}
          >
            Events website with Calendar
          </h2>
          <p data-aos="fade-up" data-aos-delay="300" className="mb-1">
            Developer in React, Typescript and Node.
          </p>
          <a
            href="https://www.davidebalice.dev"
            target="_blank"
            rel="noreferrer"
          >
            <p data-aos="fade-up" data-aos-delay="450" className={classes.url}>
              www.davidebalice.dev
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
