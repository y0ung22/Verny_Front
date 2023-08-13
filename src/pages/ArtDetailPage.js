import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

import TopBar from "../components/TopBar";
import beforeBtn from "../assets/icons/before.svg";
import beforeBtnHover from "../assets/icons/beforeHover.svg";
import nextBtn from "../assets/icons/next.svg";
import nextBtnHover from "../assets/icons/nextHover.svg";
import ButtonBar from "../components/ButtonBar";
import MenuBar from "../components/MenuBar";

const ArtDetailPage = () => {
  const [beforeHover, setBeforeHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);
  const [artDetail, setArtDetail] = useState([]);
  const location = useLocation();
  const artId = location.state.id;

  const BASE_URL = "https://yewon1209.pythonanywhere.com";

  const beforeHovered = () => {
    setBeforeHover(true);
  };

  const beforeLeave = () => {
    setBeforeHover(false);
  };

  const nextHovered = () => {
    setNextHover(true);
  };
  const nextLeave = () => {
    setNextHover(false);
  };

  //미술품 해설 받아오기
  const getArtDetail = async (id) => {
    await axios
      .get(`${BASE_URL}/main/posts/${id}`)
      .then((response) => {
        setArtDetail(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getArtDetail(artId);
  }, []);

  return (
    <Wrapper>
      <TopBar />
      <BeforeBtn onMouseEnter={beforeHovered} onMouseLeave={beforeLeave}>
        <img alt="이전 미술품" src={beforeHover ? beforeBtnHover : beforeBtn} />
      </BeforeBtn>
      <NextBtn onMouseEnter={nextHovered} onMouseLeave={nextLeave}>
        <img alt="다음 미술품" src={nextHover ? nextBtnHover : nextBtn} />
      </NextBtn>
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
      <ButtonBar artDetail={artDetail} />
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
`;

const BeforeBtn = styled.div`
  height: 575px;
  width: 57px;
  position: absolute;
  left: 0px;
  top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 12px;
    height: 48px;
  }
`;

const NextBtn = styled.div`
  height: 575px;
  width: 57px;
  position: absolute;
  right: 0px;
  top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 12px;
    height: 48px;
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
