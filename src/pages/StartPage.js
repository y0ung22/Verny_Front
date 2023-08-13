import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logoWord from "../assets/icons/logoWordWhite.svg";
import logoMixed from "../assets/icons/logoMixed.svg";
import mainImage from "../assets/designs/[S22]mainImage.svg";

function StartPage() {
  return (
    <Wrapper>
      <TopTitle>
        <img src={logoWord} alt="베르니 워드마크 로고" fill="white" />
      </TopTitle>
      <Welcome>
        <img className="logo-mixed" src={logoMixed} alt="베르니 콤비 로고" />
        <p className="sentence1">에 오신 것을 환영합니다!</p>
      </Welcome>
      <Explain>
        <p className="sentence2">
          고전미술, 현대미술, 배리어프리 문화예술관광지와 함께 <br /> 나만의
          세계를 넓혀 보세요!
        </p>
      </Explain>
      <Buttons>
        <Link to="/account/signup" style={{ textDecoration: "none" }}>
          <button className="signup-btn">회원가입</button>
        </Link>
        <Link to="/account/login" style={{ textDecoration: "none" }}>
          <button className="login-btn">로그인</button>
        </Link>
      </Buttons>
    </Wrapper>
  );
}

export default StartPage;

const Wrapper = styled.div`
  margin: auto;
  width: 360px;
  height: 800px;
  flex-shrink: 0;
  background-image: url(${mainImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin: auto;
`;

const TopTitle = styled.div`
  position: relative;
  display: flex;
  width: 360px;
  height: 48px;
  padding-top: 37px;
  padding-bottom: 13px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  img {
    width: 52.515px;
    height: 17.5px;
    flex-shrink: 0;
  }
`;

const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  margin-top: 265px;
  margin-bottom: -20px;

  .logo-mixed {
    display: flex;
    align-items: center;
    gap: 4px;

    width: 80.5px;
    height: 24px;
  }

  .sentence1 {
    color: var(--n-neutral-100, #fff);
    font-family: Pretendard;
    font-size: 20px;
    font-style: 1.25rem;
    font-weight: 600;
    line-height: 140%;
  }
`;

const Explain = styled.div`
  align-self: stretch;

  .sentence2 {
    color: var(--n-neutral-80, #c6c6c9);
    text-align: center;
    font-family: Pretendard;
    font-size: 0.794rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 145px;
  .signup-btn {
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 12px;
    background: var(--p-primary-20, #003354);
    width: 300px;
    height: 46px;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: normal;
    color: white;
    border: none;
  }

  .login-btn {
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 12px;
    background: var(--p-primary-90, #cfe5ff);
    width: 300px;
    height: 46px;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: normal;
    margin-top: 10px;
    border: none;
  }
`;
