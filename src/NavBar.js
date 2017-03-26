import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./hexacta.png";

const Container = styled.div`
	background: ${props => props.theme.darkPrimaryColor};
	color: ${props => props.theme.lightPrimaryColor};
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.img`width: 118px;`;

const StyledLink = styled(Link)`
	margin: 0 10px;
  &.active {
    padding-bottom: 5px;
    border-bottom: solid 2px ${props => props.theme.accentColor};
  }

  transition-duration: 0.2s;
  transition-property: color;
  &:hover {
    color: ${props => props.theme.lightSecondaryColor};    
  }
`;

function NavBar() {
  return (
    <Container>
      <a href="https://www.hexacta.com">
        <Logo src={logo} alt="Hexacta" />
      </a>
      <nav>
        <StyledLink to="/" className="active">
          <span>Experiments</span>
        </StyledLink>
        <StyledLink to="https://medium.com/hexacta">
          <span>Blog</span>
        </StyledLink>
      </nav>
    </Container>
  );
}

export default NavBar;
