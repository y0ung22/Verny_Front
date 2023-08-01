import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import MenuBar from "../components/MenuBar";
import ProfileBasic from "../assets/icons/profileBasic.svg";
import Comment from "../components/Comment";

const ProfilePage = () => {
  return (
    <Wrapper>
      <TopBar />
      <UserInfo>
        <UserImg>
          <img src={ProfileBasic} />
        </UserImg>
        <UserId>아이디 님</UserId>
      </UserInfo>
      <CommentBar>아이디 님이 쓴 댓글</CommentBar>
      <CommentList>
        <Comment />
      </CommentList>
      <MenuBar />
    </Wrapper>
  );
};

export default ProfilePage;

const Wrapper = styled.div`
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const UserImg = styled.div`
  display: flex;
  width: 67.5px;
  height: 67.5px;
  justify-content: center;
  align-items: center;
  img {
    width: 33.75px;
    height: 33.75px;
    flex-shrink: 0;
  }
`;

const UserId = styled.div`
  margin-bottom: 32px;
  color: var(--s-secondary-30, #3a4857);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const CommentBar = styled.div`
  display: flex;
  padding: 16px 32px;
  align-items: center;
  align-self: stretch;
  background: var(--nv-neutral-variant-99, #fcfcff);
  color: var(--s-secondary-20, #243240);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const CommentList = styled.div`
  height: 409px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
