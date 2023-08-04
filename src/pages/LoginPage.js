import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import logoSymbol from "../assets/icons/logoSymbol.svg";
import logoWord from "../assets/icons/logoWord.svg";

const LoginPage = () => {
  const navigate = useNavigate();
  const [idLoginPage, setIdLoginPage] = useState(false);
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const BASE_URL = "http://localhost:3001";

  // 카카오 계정으로 로그인
  const handleKakaoLogin = () => {
    // 카카오 계정으로 로그인 기능 구현 카카오 api?
  };

  // 하단 회원가입 페이지로 이동 버튼
  const handleSignup = () => {
    navigate.push("/signup");
  };

  // 아이디로 로그인할 때 페이지 이동
  const handleIdLogin = () => {
    setIdLoginPage(true);
  };

  // 아이디로 로그인
  const onClickLogin = async () => {
    try {
      // REST API를 이용하여 백엔드에 로그인 데이터 전달
      const response = await axios.post(`${BASE_URL}/account/login`, null, {
        params: {
          user_id: inputId,
          user_pw: inputPw,
        }, // 쿼리 파라미터 이용하는지 백엔드와 상의 필요
      });

      // 로그인 성공 여부에 따라 처리
      if (response.data.userId === undefined) {
        // id 일치하지 않는 경우
        alert("아이디가 일치하지 않아요.");
      } else if (response.data.userId === null) {
        // id는 있지만 pw가 다른 경우
        alert("비밀번호가 일치하지 않아요.");
      } else if (response.data.userId === inputId) {
        // id랑 pw 모두 일치하는 경우
        localStorage.setItem("user_id", inputId); // sessionStorage 대신 localStorage 사용하는 거 맞나
      }
      navigate.push("/"); // 로그인 완료 이후 어디로 이동할지
    } catch (error) {
      console.error("로그인 에러:", error);
      // alert("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      {idLoginPage ? (
        <SecondWrapper>
          <div className="input-id">
            <p>아이디</p>
            <input
              type="text"
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
              placeholder="아이디를 입력해주세요."
            />
          </div>
          <div className="input-pw">
            <p>비밀번호</p>
            <input
              type="password"
              value={inputPw}
              onChange={(e) => setInputPw(e.target.value)}
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
          <button onClick={onClickLogin}>
            <span>로그인하기</span>
          </button>
          <span>아직 회원이 아니신가요?</span>
          <button className="handle-signup" onClick={handleSignup}>
            회원가입하기
          </button>
        </SecondWrapper>
      ) : (
        <FirstWrapper>
          <div>
            <img
              className="logo-symbol"
              src={logoSymbol}
              alt="베르니 심볼 로고"
            />
            <img
              className="logo-word"
              src={logoWord}
              alt="베르니 워드마크 로고"
            />
          </div>
          <button className="kakao-btn" onClick={handleKakaoLogin}>
            카카오 계정으로 로그인
          </button>
          <button className="id-btn" onClick={handleIdLogin}>
            아이디로 로그인
          </button>
          <span>아직 회원이 아니신가요?</span>
          <button className="handle-signup" onClick={handleSignUp}>
            회원가입하기
          </button>
        </FirstWrapper>
      )}
    </>
  );
};

export default LoginPage;

const FirstWrapper = styled.div`
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);

  .kakao-btn {
    display: flex;
    height: 46px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 12px;
    background: #fee500;
  }

  .id-btn {
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 12px;
    background: var(--p-primary-90, #cfe5ff);
  }

  .logo-symbol {
    display: flex;
    width: 98px;
    height: 98px;
    padding: 28.584px 28.583px 28.583px 28.583px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .logo-word {
    width: 48.014px;
    height: 16px;
    flex-shrink: 0;
  }

  .span {
    color: var(--n-neutral-0, #000);

    /* Caption/1 */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
  }

  .handle-signup {
    color: var(--p-primary-80, #98cbff);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
    text-decoration-line: underline;
  }
`;

const SecondWrapper = styled.div`
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);

  p {
    color: var(--s-secondary-20, #243240);

    /* Display/2 */
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 44.8px */
  }

  input {
    display: flex;
    padding: 16px 4px;
    justify-content: center;
    align-items: flex-end;
    gap: 8px;
    flex: 1 0 0;
    border-bottom: 1.5px solid var(--s-secondary-50, #6a7889);
  }

  input::placeholder {
    flex: 1 0 0;
    color: var(--s-secondary-20, #243240);
    /* Body/2 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    opacity: 0.6000000238418579;
  }

  button {
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 12px;
    background: var(--p-primary-30, #004a77);

    span {
      color: var(--p-primary-100, #fff);

      /* Body/2 */
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
    }
  }
`;
