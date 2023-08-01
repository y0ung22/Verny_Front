import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import art from "../assets/icons/art.svg";
import artClicked from "../assets/icons/artClicked.svg";
import map from "../assets/icons/map.svg";
import mapClicked from "../assets/icons/mapClicked.svg";
import mypage from "../assets/icons/mypage.svg";
import mypageClicked from "../assets/icons/mypageClicked.svg";

const MenuBar = () => {
  const navigate = useNavigate();
  //클릭 시 선택한 탭 버튼 색 변경 위한 상태 업데이트
  const [imgSrc1, setImgSrc1] = useState(artClicked);
  const [imgSrc2, setImgSrc2] = useState(map);
  const [imgSrc3, setImgSrc3] = useState(mypage);

  //메뉴 버튼에 각 페이지 링크 라우팅
  const goArt = () => {
    navigate("/art");
    setImgSrc1(artClicked);
    setImgSrc2(map);
    setImgSrc3(mypage);
  };
  const goPlace = () => {
    navigate("/place");
    setImgSrc1(art);
    setImgSrc2(mapClicked);
    setImgSrc3(mypage);
  };
  const goMypage = () => {
    navigate("/mypage");
    setImgSrc1(art);
    setImgSrc2(map);
    setImgSrc3(mypageClicked);
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
  position: absolute;
  top: 695px;
  display: flex;
  width: 360px;
  height: 60px;
  align-items: flex-start;
  flex-shrink: 0;
`;

const Btn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8.5px 0px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  gap: 4px;
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
