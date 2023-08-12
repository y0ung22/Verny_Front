import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import beforeBtn from "../assets/icons/before.svg";
import beforeBtnHover from "../assets/icons/beforeHover.svg";
import nextBtn from "../assets/icons/next.svg";
import nextBtnHover from "../assets/icons/nextHover.svg";
import ButtonBar from "../components/ButtonBar";
import MenuBar from "../components/MenuBar";
import testImg from "../assets/etc/text.jpg";

const ArtDetailPage = () => {
  const [beforeHover, setBeforeHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);

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
        <ArtImg src={testImg} />
        <ArtDetail>
          <span id="title">Blue Water Liles</span>
          <span id="artist">Claude Monet</span>
          <span id="method">Oil on canvas</span>
          <span id="year">1916-1919</span>
        </ArtDetail>
        <Description>
          <p>
            인상파의 대표 화가 클로드 모네가 말년에 그린 '푸른 수련', Blue Water
            Lilies 입니다. 지베르니 정원의 연못에 핀 수련과 물가의 버드나무를
            캔버스에 유채로 담아냈습니다.
          </p>
          <p>
            전체적으로 어둑한 새벽녘의 분위기가 느껴지는데요, 하늘과 구름 빛이
            비친 연못을 남보라색으로 그려냈습니다. 연잎과 버드나무는 노란빛을
            적게 띠는 탁한 녹색 계열로 칠해졌으며, 그림자 부분은 약간 붉고
            어두운 주황색으로 표현했습니다.
          </p>
        </Description>
      </ArtInfo>
      <ButtonBar />
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
  padding-bottom: 180px;
  display: flex;
  width: 250px;
  height: 700px;
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
