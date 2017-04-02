import React from "react";
import styled from "styled-components";
import Post from "./Post";

const Section = styled.section`
	border-top: 3px solid ${props => props.theme.accentColor};
  display: flex;
  flex-flow: ${props => props.odd ? "row-reverse" : "row"};
`;

const P = styled.p`
  color: ${props => props.theme.lightSecondaryColor}
`;

const Img = styled.img`
  padding: 30px;
`;

const Content = styled.div`
  padding: 10px 30px;
  flex: 1;
`;

const ExperimentSection = ({ title, description, img, blog, odd }) => {
  return (
    <Section odd={odd}>
      <Img src={img} className="square" />
      <Content>
        <h2>{title}</h2>
        <P>{description}</P>
        <Post {...blog} />
      </Content>
    </Section>
  );
};

export default ExperimentSection;
