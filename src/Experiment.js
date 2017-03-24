import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";
import ExperimentSection from "./ExperimentSection";
import "./Experiment.css";

const Container = styled.div`
	color: #FAFAFA;
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
	color: #aaa;
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

class Experiment extends Component {
  componentDidMount() {
    document.title = "Hexacta - " + this.props.info.title;
  }

  render() {
    const { title, description, launch, repo, sections } = this.props.info;
    const secs = sections.map((section, i) => (
      <ExperimentSection key={i} {...section} />
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
        {/*<div className="experiment-video landscape">
          <iframe src={video} frameBorder="0" allowFullScreen />
        </div>*/}
        {secs}
      </Container>
    );
  }
}

export default Experiment;
