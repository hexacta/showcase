import React from "react";
import { Link } from "react-router-dom";

const ShowcaseItem = ({ experiment }) => {
  return <li><Link to={"/" + experiment.name}>{experiment.title}</Link></li>;
};

export default ShowcaseItem;
