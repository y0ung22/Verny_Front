import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleSignUp = async () => {
    if (password !== confirmedPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      // REST API를 이용하여 백엔드에 회원가입 데이터 전달
      const response = await axios.post("https://api.example.com/signup", {
        username,
        password,
      });

      // 회원가입이 완료되면 로그인 페이지로 이동
      history.push("/login");
    } catch (error) {
      console.error("회원가입 에러:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <h1>회원가입 페이지</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="아이디를 입력하세요."
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호를 입력하세요."
      />
      <input
        type="password"
        value={confirmedPassword}
        onChange={(e) => setConfirmedPassword(e.target.value)}
        placeholder="비밀번호를 다시 입력하세요."
      />
      <button onClick={handleSignUp}>다음</button>
    </div>
  );
};

export default SignupPage;
