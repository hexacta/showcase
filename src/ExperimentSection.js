import React from "react";
import "./ExperimentSection.css";

const ExperimentSection = ({ title, description, img, blog }) => {
  return (
    <section className="experiment-section">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default ExperimentSection;
