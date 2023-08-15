import React from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import TopBar from "../components/TopBar";
import MenuBar from "../components/MenuBar";
import ProfileBasic from "../assets/icons/profileBasic.svg";

const MyPage = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  return (
    <Wrapper>
      <TopBar />
      <UserInfo>
        <UserImg>
          <img src={ProfileBasic} alt="프로필 사진" />
        </UserImg>
        <UserId>아이디 님</UserId>
      </UserInfo>
      <MyBtn>
        <Menu>
          <Link to="/mypage/profile" style={{ textDecoration: "none" }}>
            <button>내 활동 보기</button>
          </Link>
          <Link to="/mypage/bookmark" style={{ textDecoration: "none" }}>
            <button>즐겨찾기한 미술</button>
          </Link>
        </Menu>
        <Edit>
          <Link to="/mypage/profile/edit" style={{ textDecoration: "none" }}>
            <button>프로필 수정</button>
          </Link>
          <button onClick={logout}>로그아웃</button>
        </Edit>
        <QuitBtn>
          <button>회원탈퇴</button>
        </QuitBtn>
      </MyBtn>
      <MenuBar />
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled.div`
  margin: auto;
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const UserImg = styled.div`
  display: flex;
  width: 67.5px;
  height: 67.5px;
  justify-content: center;
  align-items: center;
  img {
    width: 33.75px;
    height: 33.75px;
    flex-shrink: 0;
  }
`;

const UserId = styled.div`
  margin-bottom: 32px;
  color: var(--s-secondary-30, #3a4857);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const MyBtn = styled.div`
  display: flex;
  width: 360px;
  height: 462px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
  button {
    display: flex;
    width: 360px;
    padding: 16px 32px;
    align-items: center;
    align-self: stretch;
    background: var(--nv-neutral-variant-100, #fff);
    border: none;
    color: var(--s-secondary-20, #243240);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

const Menu = styled.div``;

const Edit = styled.div``;

const QuitBtn = styled.div`
  button {
    background: var(--error-error-95, #ffedea);
  }
`;
