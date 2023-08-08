import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import MenuBar from "../components/MenuBar";
import close from "../assets/icons/close.svg";
import filterInit from "../assets/icons/filterInit.svg";
import ProfileBasic from "../assets/icons/profileBasic.svg";
import profileEdit from "../assets/icons/profileEdit.svg";
import profileEditHover from "../assets/icons/profileEditHover.svg";
import profileImg1 from "../assets/icons/profileImg1.svg";
import profileImg1Clicked from "../assets/icons/profileImg1Clicked.svg";
import profileImg2 from "../assets/icons/profileImg2.svg";
import profileImg2Clicked from "../assets/icons/profileImg2Clicked.svg";
import profileImg3 from "../assets/icons/profileImg3.svg";
import profileImg3Clicked from "../assets/icons/profileImg3Clicked.svg";
import profileImg4 from "../assets/icons/profileImg4.svg";
import profileImg4Clicked from "../assets/icons/profileImg4Clicked.svg";
import profileImg5 from "../assets/icons/profileImg5.svg";
import profileImg5Clicked from "../assets/icons/profileImg5Clicked.svg";

const EditProfilePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const MouseHover = () => {
    setIsHovered(true);
  };
  const MouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Wrapper>
      <TopBar />
      {modal && (
        <EditModal>
          <Modal>
            <Title>
              <span>프로필 사진 수정</span>
              <BtnBox>
                <ResetBtn>
                  <img src={filterInit} />
                  <span>초기화</span>
                </ResetBtn>
                <img onClick={closeModal} src={close} />
              </BtnBox>
            </Title>
            <SelectImg>
              <img src={profileImg1} />
              <img src={profileImg2} />
              <img src={profileImg3} />
              <img src={profileImg4} />
              <img src={profileImg4} />
            </SelectImg>
            <SelectBtn>프로필 적용</SelectBtn>
          </Modal>
        </EditModal>
      )}
      <Container>
        <EditProfile>
          <ProfileImg src={ProfileBasic} alt="프로필 이미지 수정" />
          <EditImg
            src={isHovered ? profileEditHover : profileEdit}
            onMouseEnter={MouseHover}
            onMouseLeave={MouseLeave}
            onClick={openModal}
          />
        </EditProfile>
        <UserId>아이디 님</UserId>
      </Container>
      <MenuBar />
    </Wrapper>
  );
};

export default EditProfilePage;

const Wrapper = styled.div`
  margin: auto;
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);
  display: flex;
  flex-direction: column;
`;

const EditModal = styled.div`
  position: relative;
  width: 360px;
  height: 695.425px;
  flex-shrink: 0;
  opacity: 0.5;
  z-index: 5;
  background: var(--n-neutral-0, #000);
`;

const Modal = styled.div`
  position: absolute;
  bottom: 0px;
  z-index: 10;
  display: flex;
  width: 328px;
  padding: 16px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  border-radius: 12px 12px 0px 0px;
  background: var(--nv-neutral-variant-99, #fcfcff);
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  span {
    color: var(--n-neutral-10, #1a1c1e);
    font-family: Pretendard;
    font-size: 1.38rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

const ResetBtn = styled.button`
  gap: 4px;
  border: none;
  background: transparent;
  display: flex;
  padding: 4px 8px 4px 4px;
  align-items: center;
  img {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }
  span {
    color: var(--n-neutral-10, #1a1c1e);
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

const SelectImg = styled.div`
  width: 328px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  img {
    width: 48px;
    height: 48px;
  }
`;

const SelectBtn = styled.button`
  display: flex;
  width: 328px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border: none;
  border-radius: 12px;
  background: var(--p-primary-40, #00639c);
  color: var(--p-primary-100, #fff);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
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

const UserId = styled.div`
  display: flex;
  padding: 4px;
  margin-top: 10px;
  color: var(--s-secondary-30, #3a4857);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;
