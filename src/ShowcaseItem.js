import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	display: block;
	flex: 1;
	min-width: 200px;
	max-width: 300px;
	margin: 7px;
	background: ${props => props.theme.lightBackgroundColor};
	border-radius: 5px;
	overflow: hidden;
`;

const Img = styled.img`width: 100%`;

const Title = styled.h2`
	font-size: 1.3em;
	margin: 10px 8px;
	color: ${props => props.theme.darkPrimaryColor};
	text-align: center;
`;

const ShowcaseItem = ({ experiment }) => {
  return (
    <ContainerLink className="rectangle" to={"/" + experiment.name}>
      <Img className="square" src={experiment.img} alt={experiment.title} />
      <Title>{experiment.title}</Title>
    </ContainerLink>
  );
};

export default ShowcaseItem;
