import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logoMixed from "../assets/icons/logoMixed.svg";
import leaf1 from "../assets/designs/leaf1.svg";
import leaf2 from "../assets/designs/leaf2.svg";
import leaf3 from "../assets/designs/leaf3.svg";
import lotus1 from "../assets/designs/lotus1.svg";
import lotus2 from "../assets/designs/lotus2.svg";
import lines from "../assets/designs/lines1.svg";

function StartPage() {
  return (
    <Wrapper>
      <Overlay />
      <Icons>
        <img className="leaf1" src={leaf1} alt=""></img>
        <img className="leaf2" src={leaf2} alt=""></img>
        <img className="leaf3" src={leaf3} alt=""></img>
        <img className="lotus1" src={lotus1} alt=""></img>
        <img className="lotus2" src={lotus2} alt=""></img>
        <img className="lines" src={lines} alt=""></img>
      </Icons>
      <Welcome>
        <img className="logo-mixed" src={logoMixed} alt="베르니 콤비 로고" />
        <p className="sentence1">에 오신 것을 환영합니다!</p>
      </Welcome>
      <Explain>
        <p className="sentence2">
          고전미술, 최신미술, 배리어프리 문화예술관광지와 함께 나만의 세계를
          넓혀 보세요!
        </p>
      </Explain>
      <div>
        <Link to="/signup">
          <button className="signup-btn">회원가입</button>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button className="login-btn">로그인</button>
        </Link>
      </div>
    </Wrapper>
  );
}

export default StartPage;

const Wrapper = styled.div`
  width: 360px;
  height: 24px;
  flex-shrink: 0;
  background-image: url(../assets/etc/main.jpg);

  .signup-btn {
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 12px;
    background: var(--p-primary-20, #003354);
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
  }
`;

const Overlay = styled.div`
  width: 360px;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Icons = styled.div`
  .leaf1 {
    width: 48px;
    height: 48px;
    transform: rotate(-135deg);
    flex-shrink: 0;
    /* fill: var(--p-primary-80, #98CBFF); */
  }
  .leaf2 {
    width: 24px;
    height: 24px;
    transform: rotate(60deg);
    flex-shrink: 0;
    /* fill: var(--p-primary-50, #267CBC); */
  }
  .leaf3 {
    width: 32px;
    height: 32px;
    transform: rotate(-15deg);
    flex-shrink: 0;
    /* fill: var(--p-primary-70, #66B1F4); */
  }
  .lotus1 {
    width: 40px;
    height: 80px;
    transform: rotate(-45.001deg);
    flex-shrink: 0;
    /* fill: var(--t-teritary-90, #FFD6F7); */
  }
  .lotus2 {
    width: 72px;
    height: 144px;
    transform: rotate(60deg);
    flex-shrink: 0;
    /* fill: var(--t-teritary-80, #e2bbdb); */
  }
  .lines {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
  }
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
  }

  .sentence1 {
    color: var(--n-neutral-100, #fff);

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
