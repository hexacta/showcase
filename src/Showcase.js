import React from "react";
import ShowcaseItem from "./ShowcaseItem";

const Showcase = ({ experiments }) => {
  return (
    <ul>
      {experiments.map(exp => <ShowcaseItem key={exp.name} experiment={exp} />)}
    </ul>
  );
};

export default Showcase;
