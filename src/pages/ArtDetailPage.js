import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
//import axios from "axios";
import { http } from "../api/Http";

import TopBar from "../components/TopBar";
import ButtonBar from "../components/ButtonBar";
import MenuBar from "../components/MenuBar";
import more from "../assets/icons/more.svg";

const ArtDetailPage = () => {
  const [artDetail, setArtDetail] = useState([]);
  const location = useLocation();
  const artId = location.state.id;
  const scraps = location.state.scraps;
  const [userId, setUserId] = useState("");

  const BASE_URL = "https://yewon1209.pythonanywhere.com";

  useEffect(() => {
    getArtDetail(artId);
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await http.get("/account/mypage/");
      setUserId(response.data.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  //미술품 해설 받아오기
  const getArtDetail = async (id) => {
    try {
      const response = await http.get(`/main/posts/${id}`);
      setArtDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //미술품 수정
  const editArt = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  //미술품 삭제
  const delArt = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <TopBar />
      {userId === artDetail.author && <img id="more" src={more} />}
      <ArtInfo>
        <ArtImg src={`${BASE_URL}${artDetail.image}`} />
        <ArtDetail>
          <span id="title">{artDetail.title}</span>
          <span id="artist">{artDetail.painter}</span>
          <span id="method">{artDetail.drawing_technique}</span>
          <span id="year">{artDetail.work_year}</span>
        </ArtDetail>
        <Description>
          {artDetail.content &&
            artDetail.content
              .split("<br/>")
              .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </Description>
      </ArtInfo>
      <ButtonBar artDetail={artDetail} userId={userId} scraps={scraps} />
      <MenuBar />
    </Wrapper>
  );
};

export default ArtDetailPage;

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
  #more {
    position: absolute;
    top: 40px;
    right: 30px;
  }
`;

const ArtInfo = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  display: flex;
  width: 250px;
  height: 610px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArtImg = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 12px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const ArtDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  #title {
    margin-bottom: 4px;
    color: var(--n-neutral-10, #1a1c1e);
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  #artist {
    color: var(--s-secondary-50, #6a7889);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  #method {
    margin-top: 12px;
    color: var(--n-neutral-50, #76777a);
    text-align: center;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  #year {
    color: var(--n-neutral-50, #76777a);
    text-align: center;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

const Description = styled.div`
  margin-bottom: 50px;
  color: var(--p-primary-0, #000);
  font-family: Pretendard;
  font-size: 0.88rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  p {
    margin: 0px;
    margin-bottom: 20px;
  }
`;
