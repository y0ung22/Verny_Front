import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../styles";
import TopBar from "../components/TopBar";
import axios from "axios";

import logoSymbol from "../assets/icons/logoSymbol.svg";
import logoWord from "../assets/icons/logoWordBlack.svg";
import check from "../assets/icons/check.svg";

const SignupPage = () => {
  const navigate = useNavigate();
  const [makeIdPage, setMakeIdPage] = useState(false);

  // 아이디로 회원가입 버튼 클릭하면 닉네임(아이디) 입력 페이지로 이동
  const handleMakeId = () => {
    setMakeIdPage(true);
  };

  if (makeIdPage) {
    return <MakeIdPage />;
  }

  // 하단 로그인페이지로 이동 버튼
  const handleLogin = () => {
    navigate("/account/login");
  };

  // SignupPage 내용
  return (
    <Container>
      <TopBar />
      <SignupPageStyle>
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
          <button className="id-btn" onClick={handleMakeId}>
            <span className="id-text">아이디로 회원가입</span>
          </button>
          <HandleLoginStyle>
            <span>이미 회원이신가요?</span>
            <button className="handle-login" onClick={handleLogin}>
              로그인하기
            </button>
          </HandleLoginStyle>
        </Buttons>
      </SignupPageStyle>
    </Container>
  );
};

const MakeIdPage = () => {
  const navigate = useNavigate();

  const [newId, setNewId] = useState(""); // 아이디 상태 생성
  const [makePwPage, setMakePwPage] = useState(false);

  const BASE_URL = "https://yewon1209.pythonanywhere.com";

  // 비번 입력 페이지로 이동
  const handleMakePw = () => {
    setMakePwPage(true);
  };

  if (makePwPage) {
    return <MakePwPage setMakePwPage={setMakePwPage} newId={newId} />;
  }

  // 아이디 중복 확인 함수
  const handleIdCheck = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/account/uniquecheck/`, {
        username: newId,
      });
      console.log(response.data);
      if (response.data.detail === "You can use this ID") {
        alert("사용할 수 있는 아이디예요");
      } else if (response.data.detail === "This field must be unique.") {
        alert("이미 존재하는 아이디예요.");
      } else {
        alert("" + response.data.detail);
      }
    } catch (error) {
      console.error("아이디 중복확인 에러:", error);
    }
  };

  // 하단 로그인페이지로 이동 버튼
  const handleLogin = () => {
    navigate("/account/login", { state: { value: { newId } } });
  };

  // MakeIdPage 내용
  return (
    <Container>
      <TopBar />
      <MakeIdPageStyle>
        <div className="id-text">
          <p>아이디</p>
        </div>
        <div className="id-condition">
          <div className="first-condition">
            <img className="check" src={check} alt="체크" />
            <span>3자 이상, 9자 이내여야 해요</span>
          </div>
          <div className="second-condition">
            <img className="check" src={check} alt="체크" />
            <span>한글과 영문만 사용가능해요</span>
          </div>
        </div>
        <InputStyle>
          <input
            type="text"
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
            placeholder="아이디를 입력해주세요."
          />
          <button onClick={handleIdCheck}>중복확인</button>
        </InputStyle>
        <Bottom>
          <div>
            <button className="btn" onClick={handleMakePw}>
              다음
            </button>
          </div>
          <HandleLoginStyle>
            <span>이미 회원이신가요?</span>
            <button onClick={handleLogin}>로그인하기</button>
          </HandleLoginStyle>
        </Bottom>
      </MakeIdPageStyle>
    </Container>
  );
};

const MakePwPage = ({ newId }) => {
  const navigate = useNavigate();
  const [newPw, setNewPw] = useState(""); // 비밀번호 상태 생성
  const [checkPwPage, setCheckPwPage] = useState(false);

  const memoizedNewId = useMemo(() => newId, [newId]);

  // 비번 확인 페이지로 이동
  const handleCheckPwPage = () => {
    setCheckPwPage(true);
  };

  if (checkPwPage) {
    return (
      <CheckPwPage
        setCheckPwPage={setCheckPwPage}
        newId={newId}
        newPw={newPw}
      />
    );
  }

  const handleLogin = () => {
    navigate("/account/login", { state: { value: { newId, newPw } } });
  };

  // MakePwPage 내용
  return (
    <Container>
      <TopBar />
      <MakePwPageStyle>
        <div className="pw-text">
          <p>비밀번호</p>
        </div>
        <div className="input-style">
          <input
            type="password"
            value={newPw}
            onChange={(e) => setNewPw(e.target.value)}
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
        <Bottom>
          <div>
            <button className="btn" onClick={handleCheckPwPage}>
              다음
            </button>
          </div>
          <HandleLoginStyle>
            <span>이미 회원이신가요?</span>
            <button onClick={handleLogin}>로그인하기</button>
          </HandleLoginStyle>
        </Bottom>
      </MakePwPageStyle>
    </Container>
  );
};

// 회원가입 완료
const CheckPwPage = ({ newId, newPw }) => {
  console.log("newId:", newId);
  console.log("newPw:", newPw);

  const navigate = useNavigate();
  const [enteredPw, setenteredPw] = useState(""); // 비밀번호 확인

  const BASE_URL = "https://yewon1209.pythonanywhere.com";

  const memoizedNewId = useMemo(() => newId, [newId]);
  const memoizedNewPw = useMemo(() => newPw, [newPw]);

  // 회원가입 완료
  const handleCompleteSignup = async (e) => {
    e.preventDefault();

    if (newPw.trim() !== enteredPw.trim()) {
      alert("비밀번호가 일치하지 않아요.");
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/account/signup/`,
        {
          username: newId,
          password: newPw,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.message === "회원가입 실패") {
        alert("회원가입에 실패하였습니다.");
      } else if (response.data.message === "회원가입 성공") {
        navigate(`/account/login`);
      }
    } catch (error) {
      console.error("요청 오류:", error);
    }
  };

  const handleLogin = () => {
    navigate("/account/login");
  };

  // CheckPwPage 내용
  return (
    <Container>
      <TopBar />
      <CheckPwPageStyle>
        <div className="top-text">
          <p>비밀번호 확인</p>
          <div className="pw-condition">
            <img src={check} alt="체크" />
            <span>비밀번호와 일치해야 해요</span>
          </div>
        </div>
        <div className="input-style">
          <input
            type="password"
            value={enteredPw}
            onChange={(e) => setenteredPw(e.target.value)}
            placeholder="비밀번호를 다시 입력해주세요."
          />
        </div>
        <Bottom>
          <div>
            <button className="btn" onClick={handleCompleteSignup}>
              회원가입하기
            </button>
          </div>
          <HandleLoginStyle>
            <span>이미 회원이신가요?</span>
            <button onClick={handleLogin}>로그인하기</button>
          </HandleLoginStyle>
        </Bottom>
      </CheckPwPageStyle>
    </Container>
  );
};

export default SignupPage;

// 공통 적용 되는 요소들
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 167px;
  .btn {
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
    color: var(--p-primary-100, #fff);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    cursor: pointer;
  }
`;

const HandleLoginStyle = styled.div`
  margin-top: 24px;
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

// 회원가입 첫 페이지
const SignupPageStyle = styled.div`
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
  margin-top: 230px;
  gap: 8px;

  .id-text {
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

// 아이디 입력하는 두 번째 페이지
const MakeIdPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 98px;
  .id-text {
    display: flex;
    align-items: flex-start;
    p {
      color: var(--s-secondary-20, #243240);
      font-family: Pretendard;
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      padding: 0px 0px 0px 20px;
    }
  }
  .id-condition {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 0px 0px 20px;
    margin-top: -25px;

    .first-condition {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }

    .second-condition {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }

    img {
      width: 8px;
      height: 8px;
    }

    span {
      flex: 1 0 0;
      color: var(--s-secondary-40, #52606f);
      font-family: Pretendard;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }
  }
`;

const InputStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px 20px 50px 20px;

  input {
    display: flex;
    padding: 15px 0px 12px 0px;
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
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    opacity: 0.6000000238418579;
  }

  button {
    width: 82px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 1.5px solid var(--p-primary-40, #00639c);
    background-color: transparent;
    color: var(--p-primary-40, #00639c);
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    cursor: pointer;
  }
`;

// 비밀번호 입력하는 세 번째 페이지
const MakePwPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -79px;

  .pw-text {
    display: flex;
    align-items: flex-start;
    margin-top: 213px;
    p {
      width: 320px;
      flex-shrink: 0;
      color: var(--s-secondary-20, #243240);
      font-family: Pretendard;
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }
  }

  .input-style {
    padding: 0px 0px 53px 0px;

    input {
      width: 312px;
      display: flex;
      padding: 5px 0px 12px 0px;
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
      font-family: Pretendard;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      opacity: 0.6000000238418579;
    }
  }
`;

const CheckPwPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -55px;

  .top-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 165px;

    p {
      width: 320px;
      flex-shrink: 0;
      color: var(--s-secondary-20, #243240);
      font-family: Pretendard;
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }
    .pw-condition {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 5px;
      margin-top: -25px;

      img {
        width: 8px;
        height: 8px;
      }

      span {
        flex: 1 0 0;
        color: var(--s-secondary-40, #52606f);
        font-family: Pretendard;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
      }
    }
  }

  .input-style {
    padding: 30px 0px 55px 0px;

    input {
      width: 312px;
      display: flex;
      padding: 5px 0px 12px 0px;
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
      font-family: Pretendard;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
      opacity: 0.6000000238418579;
    }
  }
`;
