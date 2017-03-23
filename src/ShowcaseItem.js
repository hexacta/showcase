import React from "react";
import { Link } from "react-router-dom";
import "./ShowcaseItem.css";

const ShowcaseItem = ({ experiment }) => {
  return (
    <Link className="showcase-item rectangle" to={"/" + experiment.name}>
      <img className="square" alt={experiment.title} />
      <span>
        {experiment.title}
      </span>
    </Link>
  );
};

export default ShowcaseItem;
