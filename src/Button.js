import React from "react";
import "./Button.css";

const Button = ({ href, children }) => {
  return <a className="button" href={href}>{children}</a>;
};

export default Button;
