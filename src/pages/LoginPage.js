import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../axios";
import TopBar from "../components/TopBar";

import styled from "styled-components";
import { Container } from "../styles";

import logoSymbol from "../assets/icons/logoSymbol.svg";
import logoWord from "../assets/icons/logoWordBlack.svg";
import kakao from "../assets/icons/kakao.svg";

const LoginPage = () => {
  const navigate = useNavigate();
  const [idLoginPage, setIdLoginPage] = useState(false);
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const BASE_URL = "https://yewon1209.pythonanywhere.com";

  // 카카오 계정으로 로그인
  const handleKakaoLogin = () => {
    // 카카오 계정으로 로그인 기능 구현 카카오 api?
  };

  // 하단 회원가입 페이지로 이동 버튼
  const handleSignup = () => {
    navigate("/account/signup");
  };

  // 아이디로 로그인할 때 페이지 이동
  const handleIdLogin = () => {
    setIdLoginPage(true);
  };

  // 아이디로 로그인
  const onClickLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post(
        `${BASE_URL}/account/login/`,
        {
          username: inputId,
          password: inputPw,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", response.data.token);
      navigate(`/art`);
    } catch (error) {
      // 로그인 실패 시 에러 처리
      if (error.response && error.response.status === 401) {
        alert("아이디 또는 비밀번호가 틀립니다.");
      } else {
        console.log("로그인 에러:", error);
      }
    }
  };

  return (
    <Container>
      <TopBar />
      {idLoginPage ? (
        <SecondWrapper>
          <Input>
            <div>
              <p>아이디</p>
              <input
                type="text"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
                placeholder="아이디를 입력해주세요."
              />
            </div>
            <div>
              <p>비밀번호</p>
              <input
                type="password"
                value={inputPw}
                onChange={(e) => setInputPw(e.target.value)}
                placeholder="비밀번호를 입력해주세요."
              />
            </div>
          </Input>
          <Bottom>
            <button className="finish-login-btn" onClick={onClickLogin}>
              로그인하기
            </button>
            <HandleSignupStyle>
              <span>아직 회원이 아니신가요?</span>
              <button className="handle-signup" onClick={handleSignup}>
                회원가입하기
              </button>
            </HandleSignupStyle>
          </Bottom>
        </SecondWrapper>
      ) : (
        <FirstWrapper>
          <Logo>
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
          </Logo>
          <Buttons>
            <button className="kakao-btn" onClick={handleKakaoLogin}>
              <img className="kakao" src={kakao} alt="카카오" />
              <span>카카오 계정으로 로그인</span>
            </button>
            <button className="id-btn" onClick={handleIdLogin}>
              <span>아이디로 로그인</span>
            </button>
            <HandleSignupStyle>
              <span>아직 회원이 아니신가요?</span>
              <button onClick={handleSignup}>회원가입하기</button>
            </HandleSignupStyle>
          </Buttons>
        </FirstWrapper>
      )}
    </Container>
  );
};

export default LoginPage;

const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;

  .logo-symbol {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 28.584px 28.583px 28.583px 28.583px;
    flex-shrink: 0;
  }

  .logo-word {
    width: 48.014px;
    height: 16px;
    flex-shrink: 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 160px;
  gap: 8px;

  .kakao-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 328px;
    height: 46px;
    align-self: stretch;
    border-radius: 12px;
    background: #fee500;
    border: none;
    gap: 10px;
    cursor: pointer;
  }

  .kakao {
    width: 20px;
    height: 18px;
  }

  span {
    color: rgba(0, 0, 0, 0.85);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .id-btn {
    display: flex;
    width: 328px;
    height: 46px;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 12px;
    background: var(--p-primary-90, #cfe5ff);
    border: none;
    cursor: pointer;
  }
`;

// 아이디로 로그인 누르면 넘어가는 페이지
const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 15px;

  p {
    color: var(--s-secondary-20, #243240);
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 10px;
  }

  input {
    width: 20rem;
    display: flex;
    padding: 1rem 0.25rem;
    justify-content: center;
    align-items: flex-end;
    flex: 1 0 0;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1.5px solid var(--s-secondary-50, #6a7889);
  }

  input::placeholder {
    flex: 1 0 0;
    color: var(--s-secondary-20, #243240);
    /* Body/2 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    opacity: 0.6000000238418579;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;

  .finish-login-btn {
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 328px;
    height: 46px;
    align-self: stretch;
    border-radius: 12px;
    background: var(--p-primary-30, #004a77);
    border: none;
    color: white;
    cursor: pointer;
  }
`;

const HandleSignupStyle = styled.div`
  span {
    color: var(--n-neutral-0, #000);
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  button {
    color: var(--p-primary-80, #98cbff);
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    text-decoration-line: underline;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
