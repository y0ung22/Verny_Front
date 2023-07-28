import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function StartPage() {
  //   const loginPost = async (e) => {
  //     e.preventDefault();
  //     await axios
  //       .post("/account/login", {
  //         id: id,
  //         password: password,
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //       });
  //   };

  return (
    <>
      <div className="logoSymbol" img src="assets/logoSymbol.svg"></div>
      <div className="logoWord" img src="assets/logoWord.svg"></div>
      <div>
        <p>에 오신 것을 환영합니다!</p>
      </div>
      <div className="signup-box">
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
      </div>
      <div className="login-box">
        <Link to="/login">
          <button>로그인</button>
        </Link>
      </div>
    </>
  );
}

export default StartPage;
