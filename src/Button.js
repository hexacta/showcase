import styled from "styled-components";

const Button = styled.a`
	display: block;
	border: 1px solid ${props => props.theme.accentColor};
	padding: 10px 0;
	margin: 4px;
	letter-spacing: 1px;
	text-decoration: none;
	text-transform: uppercase;
	text-align: center;
	color: ${props =>
  props.filled ? props.theme.darkPrimaryColor : props.theme.accentColor};
	background: ${props => props.filled ? props.theme.accentColor : "transparent"};
`;

export default Button;
