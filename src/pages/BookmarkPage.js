import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import MenuBar from "../components/MenuBar";
import profileBasic from "../assets/icons/profileBasic.svg";
import ArtBox from "../components/ArtBox";

const BookmarkPage = () => {
  return (
    <Wrapper>
      <TopBar />
      <UserInfo>
        <UserImg>
          <img src={profileBasic} />
        </UserImg>
        <UserId>아이디 님</UserId>
      </UserInfo>
      <ArtList>
        <ArtBox />
        <ArtBox />
        <ArtBox />
        <ArtBox />
      </ArtList>

      <MenuBar />
    </Wrapper>
  );
};

export default BookmarkPage;

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

const ArtList = styled.div`
  margin: 0px 16px;
  height: 450px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
