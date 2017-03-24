import React from "react";
import styled from "styled-components";
import ShowcaseItem from "./ShowcaseItem";

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: row wrap;
	padding: 0;
	margin: 10px auto;
	max-width: ${props => props.theme.maxWidth};
`;

const Showcase = ({ experiments }) => {
  return (
    <Container>
      {experiments.map(exp => <ShowcaseItem key={exp.name} experiment={exp} />)}
    </Container>
  );
};

export default Showcase;
