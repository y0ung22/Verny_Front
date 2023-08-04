import React, { useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import comment from "../assets/icons/comment.svg";
import bookmark from "../assets/icons/bookmark.svg";
import bookmarkClicked from "../assets/icons/bookmarkClicked.svg";
import testImg from "../assets/etc/text.jpg";

const ArtBox = () => {
  const navigate = useNavigate();
  const [bookMark, setBookMark] = useState(false);
  const [bookMarkSrc, setBookMarkSrc] = useState(bookmark);

  const moveDetail = () => {
    navigate("/art/detail");
  };

  //댓글 이동 함수
  const moveComment = () => {
    navigate("/art/detail/comment");
  };

  //북마크 함수
  const savekBookMark = () => {
    if (bookMark) {
      setBookMark(false);
      setBookMarkSrc(bookmark);
    } else {
      setBookMark(true);
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
      <Image
        src={testImg}
        alt="수련이 연못에 떠 있고 버드나무가 드리워진 푸른빛과 초록빛의 그림"
        onClick={moveDetail}
      />
      <Info>
        <TextBox onClick={moveDetail}>
          <Title>Blue Water Lilies</Title>
          <Artist>Claude Monet</Artist>
        </TextBox>
        <BtnBox>
          <Btn onClick={moveComment}>
            <img src={comment} alt="댓글" />
            <span>100</span>
          </Btn>
          <Btn onClick={savekBookMark}>
            <img src={bookMarkSrc} alt="즐겨찾기" />
            <span>100</span>
          </Btn>
        </BtnBox>
      </Info>
    </Wrapper>
  );
};

export default ArtBox;

const Wrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  width: 156px;
  height: 321px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
`;

const Image = styled.img`
  width: 156px;
  height: 210px;
  border-radius: 12px;
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
