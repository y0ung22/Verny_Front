import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logoMixed from "../assets/icons/logoMixed.svg";
import mainImage from "../assets/designs/[S22]mainImage.svg";

function StartPage() {
  return (
    <Wrapper>
      <Welcome>
        <img className="logo-mixed" src={logoMixed} alt="베르니 콤비 로고" />
        <p className="sentence1">에 오신 것을 환영합니다!</p>
      </Welcome>
      <Explain>
        <p className="sentence2">
          고전미술, 현대미술, 배리어프리 문화예술관광지와 함께 나만의 세계를
          넓혀 보세요!
        </p>
      </Explain>
      <Buttons>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <button className="signup-btn">회원가입</button>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button className="login-btn">로그인</button>
        </Link>
      </Buttons>
    </Wrapper>
  );
}

export default StartPage;

const Wrapper = styled.div`
  width: 360px;
  height: 800px;
  flex-shrink: 0;
  background-image: url(${mainImage});
  margin: auto;
`;

const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  .logo-mixed {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 365px;
    width: 80.5px;
    height: 24px;
  }

  .sentence1 {
    color: var(--n-neutral-100, #fff);
    margin-top: 384px;

    /* Heading/1 */
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 30.8px */
  }
`;

const Explain = styled.div`
  align-self: stretch;
  margin-top: -20px;

  .sentence2 {
    color: var(--n-neutral-80, #c6c6c9);
    text-align: center;

    /* Body/3 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 160px;
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
    color: white;
    border: none;
    text-decoration: none;
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
    margin-top: 10px;
    border: none;
    text-decoration: none;
  }
`;
