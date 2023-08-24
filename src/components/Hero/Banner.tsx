import React, { FunctionComponent } from "react";
import classes from "./Hero.module.css";
import Breadcrumb from "../Utils/Breadcrumb";

interface BannerProps {
  img: string;
  text: string;
}

const Banner: FunctionComponent<BannerProps> = (props) => {
  return (
    <section className={classes.banner}>
      <div className={classes.bannerTextContainer}>
        <p className={classes.bannerText}>
            {props.text}
          <Breadcrumb link="Calendar" />
        </p>
      </div>
      <img src={props.img} alt="" data-aos="fade-in" className="w-100" />
    </section>
  );
};

export default Banner;
