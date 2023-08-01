import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import MenuBar from "../components/MenuBar";
import ProfileBasic from "../assets/icons/profileBasic.svg";
import profileEdit from "../assets/icons/profileEdit.svg";
import profileEditHover from "../assets/icons/profileEditHover.svg";

const EditProfilePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const MouseHover = () => {
    setIsHovered(true);
  };
  const MouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Wrapper>
      <TopBar />
      <Container>
        <EditProfile>
          <ProfileImg src={ProfileBasic} alt="프로필 이미지 수정" />
          <EditImg
            src={isHovered ? profileEditHover : profileEdit}
            onMouseEnter={MouseHover}
            onMouseLeave={MouseLeave}
          />
        </EditProfile>
        <EditId alt="프로필 닉네임 수정" placeholder="아이디"></EditId>
      </Container>
      <EditBtn>수정 완료</EditBtn>
      <MenuBar />
    </Wrapper>
  );
};

export default EditProfilePage;

const Wrapper = styled.div`
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  margin-top: 195px;
  margin-bottom: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditProfile = styled.div`
  position: relative;
`;

const ProfileImg = styled.img`
  width: 67.5px;
  height: 67.5px;
  flex-shrink: 0;
`;

const EditImg = styled.img`
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  z-index: 5;
  fill: var(--n-neutral-100, #fff);
  filter: drop-shadow(0px 4px 4px rgba(0, 51, 84, 0.04));
  &:hover {
    src: ${profileEditHover};
  }
`;

const EditId = styled.input`
  width: 120px;
  display: flex;
  padding: 4px;
  margin-top: 10px;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
  border: none;
  outline: none;
  border-bottom: 1.5px solid var(--s-secondary-50, #6a7889);
  color: var(--s-secondary-10, #0e1d2a);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  text-align: center;
`;

const EditBtn = styled.button`
  display: flex;
  width: 328px;
  padding: 12px 16px;
  margin: 0px 16px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  background: var(--p-primary-30, #004a77);
  color: var(--p-primary-100, #fff);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
