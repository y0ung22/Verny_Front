import React, { useState, useNavigate } from "react";
import styled from "styled-components";

import backArrow from "../assets/icons/goBack.svg";

const TopBar = () => {
  const path = window.location.pathname;
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <BackBtn show={show} onClick={goBack}>
        <img src={backArrow} />
      </BackBtn>
      <Title>
        {() => {
          if (path == "/account/signup/") return "회원가입" && setShow(true);
          if (path == "/account/login/") return "로그인" && setShow(true);
          if (path == "/main/") return "미술" && setShow(false);
          if (path == "/main/<int:pk>/") return "미술품" && setShow(true);
          if (path == "/main/<int:pk>/comments/")
            return "댓글" && setShow(true);
          if (path == "/map/") return "문예관광지도" && setShow(false);
          if (path == "/account/mypage") return "마이페이지" && setShow(false);
          if (path == "/account/profile") return "프로필" && setShow(true);
          if (path == "/account/mypage_edit")
            return "프로필 수정" && setShow(true);
        }}
      </Title>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 13px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: var(--n-neutral-100, #fff);
`;

const BackBtn = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
  visibility: ${({ show }) => (show ? visible : hidden)};
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
