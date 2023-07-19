import React from "react";
import classes from "./Divider.module.css";

interface SpacerProps {
  height: number;
}

const Spacer: React.FC<SpacerProps> = (props) => {
  return (
    <div
      className={classes.spacer}
      style={{ height: props.height + "px" }}
    ></div>
  );
};

export default Spacer;
