import React from 'react';
import classes from './Divider.module.css';

interface DividerProps {

}

const Divider: React.FC<DividerProps> = (props) => {
  return <div className={classes.divider1}></div>;
};

export default Divider;
