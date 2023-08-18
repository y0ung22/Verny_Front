import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { http } from "../api/Http";

import comment from "../assets/icons/comment.svg";
import bookmark from "../assets/icons/bookmark.svg";
import bookmarkClicked from "../assets/icons/bookmarkClicked.svg";

const ArtBox = ({ art, scraps, userId }) => {
  const navigate = useNavigate();
  const [bookMark, setBookMark] = useState(false);
  const [bookMarkSrc, setBookMarkSrc] = useState(bookmark);

  const BASE_URL = "https://yewon1209.pythonanywhere.com";

  //미술품 해설 이동
  const moveDetail = () => {
    navigate("/art/detail", { state: { id: art.id, scraps: scraps } });
  };

  console.log(scraps);
  console.log(userId);

  //댓글 이동
  const moveComment = () => {
    navigate("/art/detail/comment", { state: { id: art.id } });
  };

  //북마크 관리 함수
  const handleBookmark = async () => {
    try {
      const postData = bookMark ? { scrapped: false } : { scrapped: true };
      await http.post(`/main/posts/${art.id}/scrap/`, postData);

      setBookMark((prevBookMark) => !prevBookMark);
      if (scraps.includes(userId)) {
        setBookMarkSrc(bookmarkClicked);
      } else {
        setBookMarkSrc(bookmark);
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Image
        src={`${BASE_URL}${art.image}`}
        alt="이미지 대체 텍스트"
        onClick={moveDetail}
      />
      <Info>
        <TextBox onClick={() => moveDetail}>
          <Title>{art.title}</Title>
          <Artist>{art.painter}</Artist>
        </TextBox>
        <BtnBox>
          <Btn onClick={moveComment}>
            <img src={comment} alt="댓글" />
            <span>{art.comment_count}</span>
          </Btn>
          <Btn onClick={handleBookmark}>
            <img src={bookMarkSrc} alt="즐겨찾기" />
            <span id="bookmark" liked={bookMark}>
              {art.scraps_count}
            </span>
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
  height: 340px;
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
  object-fit: cover;
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
  #bookmark {
    color: ${({ liked }) =>
      liked ? "var(--p-primary-40, #00639c)" : "var(--n-neutral-10, #1a1c1e)"};
  }
`;
