import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import backArrow from "../assets/icons/goBack.svg";

const TopBar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  const isDeeperPage = pathname.split("/").length > 2;

  useState(() => {
    setShow(isDeeperPage);
  }, [pathname]);

  let titleText = "";
  if (pathname === "/account/signup") titleText = "회원가입";
  else if (pathname === "/account/login") titleText = "로그인";
  else if (pathname === "/art") titleText = "미술";
  else if (pathname === "/search") titleText = "미술";
  else if (pathname === "/art/upload") titleText = "미술품 업로드";
  else if (pathname === "/art/edit") titleText = "미술품 수정";
  else if (pathname === "/art/detail") titleText = "미술품";
  else if (pathname === "/art/detail/comment") titleText = "댓글";
  else if (pathname === "/art/detail/comment/re") titleText = "답글";
  else if (pathname === "/place") titleText = "문예관광지도";
  else if (pathname === "/mypage") titleText = "마이페이지";
  else if (pathname === "/mypage/myarts") titleText = "내가 쓴 글 보기";
  else if (pathname === "/mypage/profile") titleText = "내 활동 보기";
  else if (pathname === "/mypage/profile/edit") titleText = "프로필 수정";
  else if (pathname === "/mypage/bookmark") titleText = "즐겨찾기한 미술";

  return (
    <Wrapper>
      {isDeeperPage && (
        <BackBtn show={show} onClick={goBack}>
          <img src={backArrow} alt="뒤로가기 버튼" />
        </BackBtn>
      )}
      <Title>{titleText}</Title>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 360px;
  height: 48px;
  padding-top: 25px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: var(--n-neutral-100, #fff);
`;

const BackBtn = styled.div`
  position: absolute;
  left: 16.24px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  z-index: 5;
  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

const Title = styled.div`
  color: var(--p-primary-10, #001d33);
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;
