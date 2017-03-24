import React from "react";
import styled from "styled-components";

const Section = styled.section`
	border-top: 3px solid ${props => props.theme.accentColor};
`;

const ExperimentSection = ({ title, description, img, blog }) => {
  return (
    <Section>
      <h2>{title}</h2>
      <p>{description}</p>
    </Section>
  );
};

export default ExperimentSection;
