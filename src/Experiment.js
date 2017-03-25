import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";
import ExperimentSection from "./ExperimentSection";

const Container = styled.div`
	color: ${props => props.theme.lightPrimaryColor};
	height: 100%;
	padding: 20px 0;
	margin: 0 auto;
	max-width: 1000px;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;

const Title = styled.h1`
	margin: 0;
	padding: 12px;
`;

const P = styled.p`
	margin: 0;
	color: ${props => props.theme.lightSecondaryColor};
	line-height: 1.3em;
	padding: 12px;
	font-size: 18px;
`;

const Nav = styled.nav`
	min-width: 200px;
	width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Video = styled.div`
  display: none;
	width: 100%;
	position: relative;
  & > iframe {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

class Experiment extends Component {
  componentDidMount() {
    document.title = "Hexacta - " + this.props.info.title;
  }

  render() {
    const {
      title,
      description,
      launch,
      repo,
      sections,
      video
    } = this.props.info;
    const secs = sections.map((section, i) => (
      <ExperimentSection key={i} {...section} odd={i % 2} />
    ));
    return (
      <Container>
        <Header>
          <div>
            <Title>{title}</Title>
            <P>{description}</P>
          </div>
          <Nav>
            <Button href={launch} filled>Launch</Button>
            <Button href={repo}>Get The Code</Button>
          </Nav>
        </Header>
        <Video className="landscape">
          <iframe src={video} frameBorder="0" allowFullScreen />
        </Video>
        {secs}
      </Container>
    );
  }
}

export default Experiment;
