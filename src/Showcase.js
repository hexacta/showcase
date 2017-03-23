import React from "react";
import ShowcaseItem from "./ShowcaseItem";
import "./Showcase.css";

const Showcase = ({ experiments }) => {
  return (
    <ul className="showcase">
      {experiments.map(exp => <ShowcaseItem key={exp.name} experiment={exp} />)}
    </ul>
  );
};

export default Showcase;
