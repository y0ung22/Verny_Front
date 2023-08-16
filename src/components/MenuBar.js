import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import art from "../assets/icons/art.svg";
import artClicked from "../assets/icons/artClicked.svg";
import map from "../assets/icons/map.svg";
import mapClicked from "../assets/icons/mapClicked.svg";
import mypage from "../assets/icons/mypage.svg";
import mypageClicked from "../assets/icons/mypageClicked.svg";

const MenuBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  //클릭 시 선택한 탭 버튼 색 변경 위한 상태 업데이트
  const [imgSrc1, setImgSrc1] = useState(artClicked);
  const [imgSrc2, setImgSrc2] = useState(map);
  const [imgSrc3, setImgSrc3] = useState(mypage);
  const [activeTab, setActiveTab] = useState("");

  //메뉴 버튼에 각 페이지 링크 라우팅
  const goArt = () => {
    navigate("/art");
  };
  const goPlace = () => {
    navigate("/place");
  };
  const goMypage = () => {
    navigate("/mypage");
  };

  useEffect(() => {
    setImgSrc1(
      pathname === "/art" ||
        pathname === "/art/detail" ||
        pathname === "/art/detail/comment" ||
        pathname === "/art/detail/comment/re" ||
        pathname === "/art/upload" ||
        pathname === "/search"
        ? artClicked
        : art
    );
    setImgSrc2(pathname === "/place" ? mapClicked : map);
    setImgSrc3(
      pathname === "/mypage" ||
        pathname === "/mypage/profile" ||
        pathname === "/mypage/profile/edit" ||
        pathname === "/mypage/bookmark" ||
        pathname === "/mypage/myarts"
        ? mypageClicked
        : mypage
    );
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <Wrapper>
      <Btn
        onClick={goArt}
        active={activeTab.includes("/art")}
        alt="미술 탭 버튼"
      >
        <Image src={imgSrc1} />
        <span>미술</span>
      </Btn>
      <Btn
        onClick={goPlace}
        active={activeTab.includes("/place")}
        alt="문예관광지도 탭 버튼"
      >
        <Image src={imgSrc2} />
        <span>문예관광지도</span>
      </Btn>
      <Btn
        onClick={goMypage}
        active={activeTab.includes("/mypage")}
        alt="마이페이지 탭 버튼"
      >
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
  background: var(--nv-neutral-variant-99, #fcfcff);
`;

const Btn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8.5px 0px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  gap: 2px;
  span {
    color: ${({ active }) =>
      active ? "var(--p-primary-40, #00639C)" : "var(--p-primary-10, #001d33)"};
    text-align: center;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
  padding: 4px;
  flex-shrink: 0;
`;
