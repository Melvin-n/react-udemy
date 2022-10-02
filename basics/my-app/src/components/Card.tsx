import React from "react";

const Card = (props: any): JSX.Element => {
  const classes: string = `card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
