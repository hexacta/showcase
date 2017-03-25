import styled from "styled-components";

const colors = props => {
  return props.filled
    ? `
    color: ${props.theme.darkPrimaryColor};
    background: ${props.theme.accentColor};`
    : `
    color: ${props.theme.accentColor};
    background: transparent;`;
};

const Button = styled.a`
	display: block;
	border: 1px solid ${props => props.theme.accentColor};
	padding: 10px 0;
	margin: 4px;
	letter-spacing: 1px;
	text-decoration: none;
	text-transform: uppercase;
	text-align: center;
  ${props => colors(props)}

  transition-duration: 0.2s;
  transition-property: transform;
  will-change: transform;

  &:hover {
    transform: scale(1.02);    
  }
`;

export default Button;
