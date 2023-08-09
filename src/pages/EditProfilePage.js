import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import MenuBar from "../components/MenuBar";
import close from "../assets/icons/close.svg";
import filterInit from "../assets/icons/filterInit.svg";
import profileBasic from "../assets/icons/profileBasic.svg";
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
  const [profileImgSrc, setProfileImgSrc] = useState(profileBasic);
  const [profile1Clicked, setProfile1Clicked] = useState(false);
  const [profile2Clicked, setProfile2Clicked] = useState(false);
  const [profile3Clicked, setProfile3Clicked] = useState(false);
  const [profile4Clicked, setProfile4Clicked] = useState(false);
  const [profile5Clicked, setProfile5Clicked] = useState(false);

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

  const initSelect = () => {
    setProfile1Clicked(false);
    setProfile2Clicked(false);
    setProfile3Clicked(false);
    setProfile4Clicked(false);
    setProfile5Clicked(false);
  };

  const handleImageClick = (imageId) => {
    setProfile1Clicked(false);
    setProfile2Clicked(false);
    setProfile3Clicked(false);
    setProfile4Clicked(false);
    setProfile5Clicked(false);

    switch (imageId) {
      case "profile1":
        setProfile1Clicked(true);
        break;
      case "profile2":
        setProfile2Clicked(true);
        break;
      case "profile3":
        setProfile3Clicked(true);
        break;
      case "profile4":
        setProfile4Clicked(true);
        break;
      case "profile5":
        setProfile5Clicked(true);
        break;
      default:
        break;
    }
  };

  const handleProfileImg = () => {
    if (profile1Clicked) {
      setProfileImgSrc(profileImg1);
    } else if (profile2Clicked) {
      setProfileImgSrc(profileImg2);
    } else if (profile3Clicked) {
      setProfileImgSrc(profileImg3);
    } else if (profile4Clicked) {
      setProfileImgSrc(profileImg4);
    } else if (profile5Clicked) {
      setProfileImgSrc(profileImg5);
    }

    closeModal();
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
                <ResetBtn onClick={initSelect}>
                  <img src={filterInit} />
                  <span>초기화</span>
                </ResetBtn>
                <img onClick={closeModal} src={close} />
              </BtnBox>
            </Title>
            <SelectImg>
              <img
                id="profile1"
                src={profile1Clicked ? profileImg1Clicked : profileImg1}
                onClick={() => handleImageClick("profile1")}
              />
              <img
                id="profile2"
                src={profile2Clicked ? profileImg2Clicked : profileImg2}
                onClick={() => handleImageClick("profile2")}
              />
              <img
                id="profile3"
                src={profile3Clicked ? profileImg3Clicked : profileImg3}
                onClick={() => handleImageClick("profile3")}
              />
              <img
                id="profile4"
                src={profile4Clicked ? profileImg4Clicked : profileImg4}
                onClick={() => handleImageClick("profile4")}
              />
              <img
                id="profile5"
                src={profile5Clicked ? profileImg5Clicked : profileImg5}
                onClick={() => handleImageClick("profile5")}
              />
            </SelectImg>
            <SelectBtn onClick={handleProfileImg}>프로필 적용</SelectBtn>
          </Modal>
        </EditModal>
      )}
      <Container>
        <EditProfile>
          <ProfileImg src={profileImgSrc} alt="프로필 이미지" />
          <EditImg
            alt="프로필 이미지 수정"
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
  position: relative;
  margin: auto;
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);
  display: flex;
  flex-direction: column;
`;

const EditModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  height: 695.425px;
  flex-shrink: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
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
  gap: 15px;
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
    margin-top: 2px;
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
  z-index: 1;
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
