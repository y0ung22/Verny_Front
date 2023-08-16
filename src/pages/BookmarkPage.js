import React, { useState, useEffect } from "react";
import { http } from "../api/Http";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import MenuBar from "../components/MenuBar";
import profileBasic from "../assets/icons/profileBasic.svg";
import ArtBox from "../components/ArtBox";

const BookmarkPage = () => {
  const [userId, setUserId] = useState("");
  const [scraps, setScraps] = useState([]);

  useEffect(() => {
    getId();
    myScraps();
  }, []);

  const getId = async () => {
    try {
      const response = await http.get("/account/mypage");
      setUserId(response.data.data.username);
    } catch (error) {
      console.log(error);
    }
  };

  const myScraps = async () => {
    try {
      const response = await http.get("/account/mypage/my_scraped");
      setScraps(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <TopBar />
      <UserInfo>
        <UserImg>
          <img src={profileBasic} />
        </UserImg>
        <UserId>{userId}</UserId>
      </UserInfo>
      <ArtList>
        {scraps.length > 0 ? (
          scraps.map((scrap) => <ArtBox key={scrap.id} art={scrap} />)
        ) : (
          <p>즐겨찾기한 작품이 없습니다.</p>
        )}
      </ArtList>

      <MenuBar />
    </Wrapper>
  );
};

export default BookmarkPage;

const Wrapper = styled.div`
  margin: auto;
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  margin-top: 20px;
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
  p {
    position: absolute;
    top: 350px;
    left: 222px;
    color: var(--n-neutral-10, #1a1c1e);
    font-family: Pretendard;
    font-size: 0.88rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;
