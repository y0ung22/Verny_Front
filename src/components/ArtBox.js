import React, { useState, useNavigate } from "react";
import axios from "axios";
import { styled } from "styled-components";

import comment from "../assets/icons/comment.svg";
import bookmark from "../assets/icons/bookmark.svg";
import bookmarkClicked from "../assets/icons/bookmarkClicked.svg";

const ArtBox = () => {
  const navigate = useNavigate();
  const [bookmarkCnt, setBookmarkCnt] = useState(0);
  const [bookMark, setBookMark] = useState(false);
  const [bookMarkSrc, setBookMarkSrc] = useState(bookmark);

  //댓글 이동 함수
  const moveComment = () => {
    navigate("/main/<int:pk>/comments/");
  };

  //북마크 함수
  const savekBookMark = () => {
    if (bookMark) {
      setBookMark(false);
      setBookmarkCnt((prev) => prev - 1);
      setBookMarkSrc(bookmark);
    } else {
      setBookMark(true);
      setBookmarkCnt((prev) => prev + 1);
      setBookMarkSrc(bookmarkClicked);
    }
  };

  //미술작품 정보 받아오기
  //const getAllArts = async () => {
  //await axios
  //.get(`${BASE_URL}`)
  //.then((response) => {})
  //.catch((error) => console.log(error));
  //};

  return (
    <Wrapper>
      <Image />
      <Info>
        <TextBox>
          <Title>{}</Title>
          <Artist>{}</Artist>
        </TextBox>
        <BtnBox>
          <Btn onClick={moveComment}>
            <img src={comment} />
            <span>{}</span>
          </Btn>
          <Btn onClick={savekBookMark}>
            <img src={bookMarkSrc} />
            <span>{bookmarkCnt}</span>
          </Btn>
        </BtnBox>
      </Info>
    </Wrapper>
  );
};

export default ArtBox;

const Wrapper = styled.div`
  display: flex;
  width: 156px;
  height: 321px;
`;

const Image = styled.img`
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 12px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const Info = styled.div`
  display: flex;
  padding: 8px 8px 16px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const Title = styled.div`
  overflow: hidden;
  color: var(--n-neutral-10, #1a1c1e);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const Artist = styled.div`
  overflow: hidden;
  color: var(--n-neutral-40, #5d5e61);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const BtnBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;
const Btn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
