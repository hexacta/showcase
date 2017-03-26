import React from "react";
import styled from "styled-components";

const Li = styled.li`
	display: inline-block;
	margin: 4px 2px;
	padding: 5px 0;
	background: #ddd;
	color: ${props => props.theme.darkSecondaryColor};
	border-radius: 16px;
`;

const Span = styled.span`
	padding: 0 12px;
	font-size: 14px;
`;

const Tag = ({ name }) => {
  return <Li><Span>{name}</Span></Li>;
};

export default Tag;
