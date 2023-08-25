import React from "react";
import classes from "./Divider.module.css";
import { NavLink } from "react-router-dom";

interface BreadcrumbProps {
  link: String;
  title: String;
  detail: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  return (
    <div className={classes.breadcrumb}>
      <NavLink to="/">Home</NavLink>
      <span className={classes.breadcrumbSign}>{" > "}</span>

      {props.detail ? (
        <>
          <NavLink to="/events">{props.link}</NavLink>
          {" > "}
          <a href="#">{props.title}</a>
        </>
      ) : (
        <a href="#">{props.link}</a>
      )}
    </div>
  );
};

export default Breadcrumb;
