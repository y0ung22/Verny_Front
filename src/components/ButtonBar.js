import React, { useState } from "react";
import { http } from "../api/Http";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import comment from "../assets/icons/comment.svg";
import bookmark from "../assets/icons/bookmark.svg";
import bookmarkClicked from "../assets/icons/bookmarkClicked.svg";

const ButtonBar = ({ artDetail, userId, scraps }) => {
  const navigate = useNavigate();
  const [bookMark, setBookMark] = useState(false);
  const [bookMarkSrc, setBookMarkSrc] = useState(bookmark);

  //북마크 함수
  const handleBookmark = async () => {
    try {
      const postData = bookMark ? { scrapped: false } : { scrapped: true };
      await http.post(`/main/posts/${artDetail.id}/scrap/`, postData);

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

  const moveComment = () => {
    navigate("/art/detail/comment", { state: { id: artDetail.id } });
  };

  return (
    <Wrapper>
      <Btn onClick={moveComment}>
        <img src={comment} />
        <span>{artDetail.comment_count}</span>
      </Btn>
      <Btn onClick={handleBookmark}>
        <img src={bookMarkSrc} />
        <span id="bookmark" liked={bookMark}>
          {artDetail.scraps_count}
        </span>
      </Btn>
    </Wrapper>
  );
};

export default ButtonBar;

const Wrapper = styled.div`
  position: absolute;
  top: 647px;
  display: flex;
  width: 296px;
  height: 48px;
  padding: 0px 32px;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  background: rgba(237, 241, 249, 0.8);
  backdrop-filter: blur(2px);
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
