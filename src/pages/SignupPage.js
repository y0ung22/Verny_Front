import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import logoSymbol from "../assets/icons/logoSymbol.svg";
import logoWord from "../assets/icons/logoWord.svg";

const SignupPage = () => {
  const Navigate = useNavigate();
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
    return <Navigate to="/makeid" />;
  }

  // 하단 로그인페이지로 이동 버튼
  const handleLogin = () => {
    Navigate("/login");
  };

  return (
    <>
      {/* SignupPage 내용 */}
      <div>
        <img className="logo-symbol" src={logoSymbol} alt="베르니 심볼 로고" />
        <img className="logo-word" src={logoWord} alt="베르니 워드마크 로고" />
      </div>
      <button onClick={handleKakaoSignup}>카카오 계정으로 회원가입</button>
      <button onClick={handleMakeId}>아이디로 회원가입</button>
      <span>이미 회원이신가요?</span>
      <button onClick={handleLogin}>로그인하기</button>
    </>
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
    return <Navigate to="/makepw" />;
  }

  // 아이디 입력 조건 충족 미충족 함수
  const isValidId = (id) => {
    // 아이디 입력 조건 함수
  };

  // 아이디 중복 확인 함수
  const handleIdCheck = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/account/signup/idcheck`, {
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

  return (
    <>
      {/* MakeIdPage 내용*/}
      <input
        type="text"
        value={newId}
        onChange={(e) => setNewId(e.target.value)}
        placeholder="아이디를 입력하세요."
      />
      <button onClick={handleIdCheck}>중복확인</button>
      <button onClick={handleMakePw}>다음</button>
      <span>이미 회원이신가요?</span>
      <button onClick={handleLogin}>로그인하기</button>
    </>
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
    return <Navigate to="/checkpw" />;
  }

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      {/* MakePwPage 내용 */}
      <input
        type="password"
        value={newPw}
        onChange={(e) => setNewPw(e.target.value)}
        placeholder="비밀번호를 입력하세요."
      />
      <button onClick={handleCheckPwPage}>다음</button>
      <span>이미 회원이신가요?</span>
      <button onClick={handleLogin}>로그인하기</button>
    </>
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
    // 회원가입 완료되면 첫 번째 페이지로 이동 음 어디로 이동해야 하지
    return <Navigate to="/" />;
  }

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      {/* ChecKPwPage 내용 */}
      <input
        type="password"
        value={confirmedPw}
        onChange={(e) => setConfirmedPw(e.target.value)}
        placeholder="비밀번호를 다시 입력하세요."
      />
      {!pwMatch && (
        <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
      )}
      <button onClick={handleCompleteSignup}>회원가입하기</button>
      <span>이미 회원이신가요?</span>
      <button onClick={handleLogin}>로그인하기</button>
    </>
  );
};

export default SignupPage;
