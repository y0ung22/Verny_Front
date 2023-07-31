import React, { useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

import profile from "../assets/icons/profileBasic.svg";
import like from "../assets/icons/like.svg";
import likeClicked from "../assets/icons/likeClicked.svg";
import edit from "../assets/icons/edit.svg";
import del from "../assets/icons/delete.svg";

const Comment = (text) => {
  const [showMore, setShowMore] = useState(false);
  const [likeStatus, setLikeStatus] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleLike = () => {
    setLikeStatus(!likeStatus);
  };

  return (
    <Wrapper>
      <Info>
        <Writer>
          <Profile src={profile} />
          <span id="name">{}</span>
          <span id="time">{}</span>
        </Writer>
        <BtnBox>
          <Btn onClick={handleLike}>
            <img src={likeStatus ? likeClicked : like} />
            <span>{}</span>
          </Btn>
        </BtnBox>
      </Info>
      <Content showMore={showMore}>{text}</Content>
      {!showMore && text.length > 100 && (
        <ShowMoreButton onClick={handleShowMore}>더보기</ShowMoreButton>
      )}
    </Wrapper>
  );
};

export default Comment;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const Content = styled.div`
  overflow: hidden;
  color: var(--n-neutral-10, #1a1c1e);
  text-overflow: ${({ showMore }) => (showMore ? "initial" : "ellipsis")};
  font-family: Pretendard;
  font-size: 0.88rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

const Writer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--n-neutral-10, #1a1c1e);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  #time {
    color: var(--p-primary-30, #004a77);
  }
`;

const Profile = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 6px;
  justify-content: center;
  align-items: center;
`;

const BtnBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    display: flex;
    align-items: center;
    gap: 8px;
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

const ShowMoreButton = styled.div`
  color: var(--n-neutral-40, #5d5e61);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
