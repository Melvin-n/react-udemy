import React from "react";

//props are the string className and an ARRAY of JSX.Elements as there can be multiple elememts used the card wrapper
type cardWrapperProps = {
  className: string;
  children: JSX.Element[];
};

//a type of 'wrapper' component, this card component can wrap around other components - almost as a custom html tag
const Card = ({ className, children }: cardWrapperProps): JSX.Element => {
  const classes: string = `card ${className}`;
  return <div className={classes}>{children}</div>;
};
//requirements for wrapper component:
//children prop - children is a reserved name, allows passing all content between card component as props
//without children prop, the wrapper will be empty inside
//classname prop also need to be passed as the classes assigned when used as a wrapper will be passed

export default Card;
