import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";
import { http } from "../api/Http";

import TopBar from "../components/TopBar";
import ButtonBar from "../components/ButtonBar";
import MenuBar from "../components/MenuBar";
import more from "../assets/icons/more.svg";
import DelModal from "../components/DelModal";

const ArtDetailPage = () => {
  const navigate = useNavigate();
  const [artDetail, setArtDetail] = useState([]);
  const location = useLocation();
  const artId = location.state.id;
  const scraps = location.state.scraps;
  const [userId, setUserId] = useState("");
  const [showBtnBox, setShowBtnBox] = useState(false);
  const [delModal, setDelModal] = useState(false);

  const BASE_URL = "https://yewon1209.pythonanywhere.com";

  useEffect(() => {
    getArtDetail(artId);
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await http.get("/account/mypage/");
      setUserId(response.data.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  //미술품 해설 받아오기
  const getArtDetail = async (id) => {
    try {
      const response = await http.get(`/main/posts/${id}`);
      setArtDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //미술품 수정
  const editArt = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  //미술품 삭제
  const delArt = async () => {
    try {
      await http.delete(`/main/posts/${artId}/edit`);
      navigate("/art");
    } catch (error) {
      console.log(error);
    }
  };

  const showDelModal = () => {
    setDelModal(true);
  };

  const hideDelModal = () => {
    setDelModal(false);
  };

  return (
    <Wrapper>
      <TopBar />
      {userId === artDetail.author && (
        <>
          <img
            id="more"
            src={more}
            onClick={() => setShowBtnBox(!showBtnBox)}
          />{" "}
          {showBtnBox && (
            <BtnBox>
              <button id="edit">수정하기</button>
              <button id="del" onClick={showDelModal}>
                삭제하기
              </button>
            </BtnBox>
          )}
        </>
      )}
      <ArtInfo>
        <ArtImg src={`${BASE_URL}${artDetail.image}`} />
        <ArtDetail>
          <span id="title">{artDetail.title}</span>
          <span id="artist">{artDetail.painter}</span>
          <span id="method">{artDetail.drawing_technique}</span>
          <span id="year">{artDetail.work_year}</span>
        </ArtDetail>
        <Description>
          {artDetail.content &&
            artDetail.content
              .split("<br/>")
              .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </Description>
      </ArtInfo>
      <ButtonBar artDetail={artDetail} userId={userId} scraps={scraps} />
      <MenuBar />
      {delModal && <DelModal onClose={hideDelModal} onDelete={delArt} />}
    </Wrapper>
  );
};

export default ArtDetailPage;

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
  #more {
    position: absolute;
    top: 31px;
    right: 30px;
    padding: 10px;
  }
`;

const BtnBox = styled.div`
  position: absolute;
  width: 115px;
  top: 73px;
  right: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  background: var(--nv-neutral-variant-99, #fcfcff);
  box-shadow: 0px 4px 16px 0px rgba(0, 51, 84, 0.12);
  button {
    width: 100px;
    height: 44px;
    border: none;
    background-color: transparent;
    color: var(--n-neutral-10, #1a1c1e);
    text-align: center;
    font-family: Pretendard;
    font-size: 0.88rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  #del {
    color: var(--error-error-50, #de3730);
  }
`;

const ArtInfo = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  display: flex;
  width: 250px;
  height: 610px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArtImg = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 12px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const ArtDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  #title {
    margin-bottom: 4px;
    color: var(--n-neutral-10, #1a1c1e);
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  #artist {
    color: var(--s-secondary-50, #6a7889);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  #method {
    margin-top: 12px;
    color: var(--n-neutral-50, #76777a);
    text-align: center;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  #year {
    color: var(--n-neutral-50, #76777a);
    text-align: center;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

const Description = styled.div`
  margin-bottom: 50px;
  color: var(--p-primary-0, #000);
  font-family: Pretendard;
  font-size: 0.88rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  p {
    margin: 0px;
    margin-bottom: 20px;
  }
`;
