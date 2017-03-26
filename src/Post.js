import React from "react";
import styled from "styled-components";
import PostLogo, { GREEN_COLORS, GREY_COLORS } from "./PostLogo";

const ContainerLink = styled.a`
	background: ${({ theme }) => theme.lightBackgroundColor};
	padding: 10px;
	border: 1px solid rgba(0,0,0,.04);
	border-radius: 4px;
	box-shadow: 0 1px 7px rgba(0,0,0,.05);
	display: flex;
	align-items: center;

	&:hover {
		${GREEN_COLORS}
	}
`;

const Content = styled.div`
	flex: 1;
	padding: 0 5px;
`;

const Title = styled.h3`
	color: ${({ theme }) => theme.darkPrimaryColor};
	font-weight: 700;
	font-size: 24px;
	line-height: 1.1;
	padding: 0;
	margin: 0;
`;

const Author = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-top: 10px;
`;

const Avatar = styled.img`
	border-radius: 100%;
	width: 36px;
	height: 36px;
	display: inline-block;
	vertical-align: middle;
`;

const Name = styled.span`
	color: ${({ theme }) => theme.darkSecondaryColor};
	vertical-align: middle;
	padding: 2px 10px;
	font-size: 14px;
`;

const Post = ({ title, avatar, author, url }) => {
  return (
    <ContainerLink href={url}>
      <PostLogo />
      <Content>
        <Title>{title}</Title>
        <Author>
          <Name>by {author}</Name>
          <Avatar src={avatar} alt="avatar" />
        </Author>
      </Content>
    </ContainerLink>
  );
};

export default Post;
