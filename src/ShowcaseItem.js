import React from "react";
import { Link } from "react-router-dom";
import "./ShowcaseItem.css";

const ShowcaseItem = ({ experiment }) => {
  return (
    <Link className="showcase-item rectangle" to={"/" + experiment.name}>
      <img className="square" src={experiment.img} alt={experiment.title} />
      <h1> {experiment.title} </h1>
    </Link>
  );
};

export default ShowcaseItem;
