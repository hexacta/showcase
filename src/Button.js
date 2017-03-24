import React from "react";
import "./Button.css";

const Button = ({ href, children, filled }) => {
  let classes = "button";
  classes += filled ? " filled" : "";
  return <a className={classes} href={href}>{children}</a>;
};

export default Button;
