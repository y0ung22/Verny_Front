import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // REST API를 이용하여 백엔드에 로그인 데이터 전달
      const response = await axios.post("https://api.example.com/login", {
        username,
        password,
      });

      // 로그인이 완료되면 홈 페이지로 이동
      history.push("/");
    } catch (error) {
      console.error("로그인 에러:", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
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
      <button onClick={handleLogin}>로그인하기</button>
    </div>
  );
};

export default LoginPage;
