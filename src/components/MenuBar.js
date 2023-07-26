import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate();

  //메뉴 버튼에 각 페이지 링크 라우팅
  const goClassic = () => {
    navigate("/");
  };
  const goModern = () => {
    navigate("/");
  };
  const goPlace = () => {
    navigate("/");
  };
  const goMypage = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <button onClick={goClassic}>고전미술</button>
      <button onClick={goModern}>최신미술</button>
      <button onClick={goPlace}>문예관광지도</button>
      <button onClick={goClassic}>마이페이지</button>
    </Wrapper>
  );
};

export default MenuBar;

const Wrapper = styled.div`
  width: 100%;
  min-width: 360px;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

styled.button`
  font-size: 1rem;
  background-color: transparent;
  border: none;
`;
