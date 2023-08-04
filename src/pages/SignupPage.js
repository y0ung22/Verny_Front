import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Container } from "../styles";

import logoSymbol from "../assets/icons/logoSymbol.svg";
import logoWord from "../assets/icons/logoWord.svg";

const SignupPage = () => {
  const navigate = useNavigate();
  const [makeIdPage, setMakeIdPage] = useState(false);

  // 카카오 계정으로 회원가입 버튼 클릭하여 이동
  const handleKakaoSignup = () => {
    // 카카오 계정으로 회원가입 기능 구현
  };

  // 아이디로 회원가입 버튼 클릭하면 아이디 입력 페이지로 이동
  const handleMakeId = () => {
    setMakeIdPage(true);
  };

  if (makeIdPage) {
    return <MakeIdPage setMakeIdPage={setMakeIdPage} />;
  }

  // 하단 로그인페이지로 이동 버튼
  const handleLogin = () => {
    navigate("/login");
  };

  // SignupPage 내용
  return (
    <Container>
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
          <button className="kakao-btn" onClick={handleKakaoSignup}>
            카카오 계정으로 회원가입
          </button>
          <button className="id-btn" onClick={handleMakeId}>
            아이디로 회원가입
          </button>
        </Buttons>
        <HandleLoginStyle>
          <span>이미 회원이신가요?</span>
          <button className="handle-login" onClick={handleLogin}>
            로그인하기
          </button>
        </HandleLoginStyle>
      </SignupPageStyle>
    </Container>
  );
};

const MakeIdPage = () => {
  const navigate = useNavigate();
  const [makePwPage, setMakePwPage] = useState(false);
  const [newId, setNewId] = useState("");
  const [usableId, setUsableId] = useState(false);

  const BASE_URL = "http://localhost:3001";

  // 비번 입력 페이지로 이동
  const handleMakePw = () => {
    setMakePwPage(true);
  };

  if (makePwPage) {
    return <MakePwPage setMakePwPage={setMakePwPage} />;
  }

  // 아이디 입력 조건 충족 미충족 함수
  const isValidId = (id) => {
    // 아이디 입력 조건 함수
  };

  // 아이디 중복 확인 함수
  const handleIdCheck = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/account/signup/checkid`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: newId }),
      });

      if (response.status === 200) {
        alert("사용할 수 있는 아이디예요.");
        setUsableId(true);
      } else if (response.status === 409) {
        alert("이미 존재하는 아이디예요.");
      } else {
        alert("오류가 발생했거나 사용할 수 없는 아이디예요.");
      }
    } catch (error) {
      console.error("아이디 중복확인 에러:", error);
    }
  };

  // 하단 로그인페이지로 이동 버튼
  const handleLogin = () => {
    navigate("/login");
  };

  // MakeIdPage 내용
  return (
    <Container>
      <MakeIdPageStyle>
        <p className="id-text">아이디</p>
        <div className="id-condition">
          <p>9자 이내여야 해요</p>
          <p>한글과 영문만 사용가능해요</p>
        </div>
        <InputStyle>
          <input
            type="text"
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
            placeholder="아이디를 입력해주세요."
          />
          <button onClick={handleIdCheck}>
            <span>중복확인</span>
          </button>
        </InputStyle>
        <Bottom>
          <button className="btn" onClick={handleMakePw}>
            다음
          </button>
          <HandleLoginStyle>
            <span>이미 회원이신가요?</span>
            <button onClick={handleLogin}>로그인하기</button>
          </HandleLoginStyle>
        </Bottom>
      </MakeIdPageStyle>
    </Container>
  );
};

const MakePwPage = () => {
  const navigate = useNavigate();
  const [newPw, setNewPw] = useState("");
  const [checkPwPage, setCheckPwPage] = useState(false);

  // 비번 확인 페이지로 이동
  const handleCheckPwPage = () => {
    setCheckPwPage(true);
  };

  if (checkPwPage) {
    return <CheckPwPage setCheckPwPage={setCheckPwPage} />;
  }

  const handleLogin = () => {
    navigate("/login");
  };

  // MakePwPage 내용
  return (
    <Container>
      <MakePwPageStyle>
        <p className="pw-text">비밀번호</p>
        <input
          type="password"
          value={newPw}
          onChange={(e) => setNewPw(e.target.value)}
          placeholder="비밀번호를 입력하세요."
        />
        <Bottom>
          <button className="btn" onClick={handleCheckPwPage}>
            다음
          </button>
          <HandleLoginStyle>
            <span>이미 회원이신가요?</span>
            <button onClick={handleLogin}>로그인하기</button>
          </HandleLoginStyle>
        </Bottom>
      </MakePwPageStyle>
    </Container>
  );
};

const CheckPwPage = () => {
  const navigate = useNavigate();
  const [signupCompleted, setSignupCompleted] = useState(false);
  const [confirmedPw, setConfirmedPw] = useState(""); // 비밀번호 확인
  const [pwMatch, setPwMatch] = useState(true); // 비밀번호 일치 여부
  const [newId, setNewId] = useState("");
  const [newPw, setNewPw] = useState("");

  const BASE_URL = "http://localhost:3001";

  // 회원가입 완료
  const handleCompleteSignup = async () => {
    if (newPw !== confirmedPw) {
      alert("비밀번호가 일치하지 않아요.");
      return;
    }

    try {
      // REST API를 이용하여 백엔드에 회원가입 데이터 전달
      const response = await axios.post(`${BASE_URL}/account/signup`, {
        user_id: newId,
        user_pw: newPw,
      });

      setSignupCompleted(true);
    } catch (error) {
      console.error("회원가입 에러:", error);
    }
  };

  if (signupCompleted) {
    // 회원가입 완료되면 로그인 페이지로 이동
    return navigate("/login");
  }

  const handleLogin = () => {
    navigate("/login");
  };

  // CheckPwPage 내용
  return (
    <Container>
      <CheckPwPageStyle>
        <p className="pw-check">비밀번호 확인</p>
        <p className="pw-condition">비밀번호와 일치해야 해요</p>
        <input
          type="password"
          value={confirmedPw}
          onChange={(e) => setConfirmedPw(e.target.value)}
          placeholder="비밀번호를 다시 입력하세요."
        />
        <Bottom>
          <button className="btn" onClick={handleCompleteSignup}>
            회원가입하기
          </button>
          {!pwMatch && (
            <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
          )}
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
  .btn {
    display: flex;
    width: 328px;
    height: 46px;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 12px;
    background: var(--p-primary-30, #004a77);
    border: none;
    color: white;
  }
`;

const HandleLoginStyle = styled.div`
  margin-top: 10px;
  span {
    color: var(--n-neutral-0, #000);

    /* Caption/1 */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
  }

  button {
    color: var(--p-primary-80, #98cbff);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
    text-decoration-line: underline;
    border: none;
    background-color: transparent;
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
  margin-top: 150px;

  .logo-symbol {
    display: flex;
    width: 98px;
    height: 98px;
    padding: 28.584px 28.583px 28.583px 28.583px;
    flex-shrink: 0;
  }

  .logo-word {
    width: 48.014px;
    height: 16px;
    flex-shrink: 0;
    margin-left: 50px;
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
    justify-content: center;
    align-items: center;
    width: 328px;
    height: 46px;
    flex-direction: column;
    align-self: stretch;
    border-radius: 12px;
    background: #fee500;
    border: none;
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
  }
`;

// 아이디 입력하는 두 번째 페이지
const MakeIdPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  .id-text {
    width: 320px;
    flex-shrink: 0;
    color: var(--s-secondary-20, #243240);

    /* Display/2 */
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 44.8px */
  }
  .id-condition {
    flex: 1 0 0;
    color: var(--s-secondary-40, #52606f);

    /* Caption/1 */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
  }
`;

const InputStyle = styled.div`
  display: flex;
  flex-direction: row;
  input {
    width: 215px;
    display: flex;
    padding: 16px 4px;
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
    border-radius: 12px;
    border: 1.5px solid var(--p-primary-40, #00639c);
    color: #00639c;
    background-color: transparent;
  }
`;

// 비밀번호 입력하는 세 번째 페이지
const MakePwPageStyle = styled.div`
  display: flex;
  flex-direction: column;

  .pw-text {
    width: 320px;
    flex-shrink: 0;
    color: var(--s-secondary-20, #243240);

    /* Display/2 */
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 44.8px */
  }

  input {
    width: 215px;
    display: flex;
    padding: 16px 4px;
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
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    opacity: 0.6000000238418579;
  }
`;

const CheckPwPageStyle = styled.div`
  display: flex;
  flex-direction: column;

  .pw-check {
    width: 320px;
    flex-shrink: 0;
    color: var(--s-secondary-20, #243240);

    /* Display/2 */
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 44.8px */
  }

  .pw-condition {
    flex: 1 0 0;
    color: var(--s-secondary-40, #52606f);

    /* Caption/1 */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
  }

  input {
    width: 215px;
    display: flex;
    padding: 16px 4px;
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
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    opacity: 0.6000000238418579;
  }
`;
