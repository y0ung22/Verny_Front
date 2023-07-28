import React from "react";
import styled from "styled-components";
import { useNavigate, useState } from "react-router-dom";

import art from "../assets/icons/art.svg";
import artClicked from "../assets/icons/artClicked.svg";
import map from "../assets/icons/map.svg";
import mapClicked from "../assets/icons/mapClicked.svg";
import mypage from "../assets/icons/mypage.svg";
import mypageClicked from "../assets/icons/mypageClicked.svg";

const MenuBar = () => {
  const navigate = useNavigate();
  //클릭 시 선택한 탭 버튼 색 변경 위한 상태 업데이트
  const [imgSrc1, setImgSrc1] = useState("");
  const [isClicked1, setIsClicked1] = useState(false);
  const [imgSrc2, setImgSrc2] = useState("");
  const [isClicked2, setIsClicked2] = useState(false);
  const [imgSrc3, setImgSrc3] = useState("");
  const [isClicked3, setIsClicked3] = useState(false);

  //메뉴 버튼에 각 페이지 링크 라우팅
  const goArt = () => {
    navigate("/main/");
    if (isClicked1) {
      setImgSrc1(art);
      setIsClicked1(false);
    } else {
      setImgSrc1(artClicked);
      setIsClicked1(true);
      setIsClicked2(false);
      setIsClicked3(false);
    }
  };
  const goPlace = () => {
    navigate("/map/");
    if (isClicked2) {
      setImgSrc2(map);
      setIsClicked2(false);
    } else {
      setImgSrc2(mapClicked);
      setIsClicked1(false);
      setIsClicked2(true);
      setIsClicked3(false);
    }
  };
  const goMypage = () => {
    navigate("/account/mypage");
    if (isClicked3) {
      setImgSrc3(mypage);
      setIsClicked3(false);
    } else {
      setImgSrc3(mypageClicked);
      setIsClicked1(false);
      setIsClicked2(false);
      setIsClicked3(true);
    }
  };

  return (
    <Wrapper>
      <Btn onClick={goArt}>
        <Image src={imgSrc1} />
        <span>미술</span>
      </Btn>
      <Btn onClick={goPlace}>
        <Image src={imgSrc2} />
        <span>문예관광지도</span>
      </Btn>
      <Btn onClick={goMypage}>
        <Image src={imgSrc3} />
        <span>마이페이지</span>
      </Btn>
    </Wrapper>
  );
};

export default MenuBar;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0px 16px;
  align-items: flex-start;
  flex-shrink: 0;
`;

const Btn = styled.div`
  display: flex;
  padding: 8.5px 0px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  gap: 2px;
  span {
    color: var(--p-primary-10, #001d33);
    text-align: center;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
