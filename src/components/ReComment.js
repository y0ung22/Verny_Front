import React, { useState } from "react";
import { http } from "../api/Http";
import { styled } from "styled-components";

import profile from "../assets/icons/profileBasic.svg";
import like from "../assets/icons/like.svg";
import likeClicked from "../assets/icons/likeClicked.svg";
import edit from "../assets/icons/edit.svg";
import del from "../assets/icons/delete.svg";

const ReComment = ({ commentId, comment, username }) => {
  const [showMore, setShowMore] = useState(false);
  const [likeStatus, setLikeStatus] = useState(false);
  const [likeImgSrc, setLikeImgSrc] = useState(like);

  //더보기 버튼 상태 관리
  const handleShowMore = () => {
    setShowMore(true);
  };

  //댓글 좋아요 상태 관리
  const handleLike = async () => {
    try {
      const newLikeStatus = !likeStatus;
      setLikeStatus(newLikeStatus);
      setLikeImgSrc(newLikeStatus ? likeClicked : like);
      await http.post(
        `/main/comments/${commentId}/recomments/${comment.id}/relikes`,
        {
          liked: newLikeStatus,
        }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Info>
        <Writer>
          <Profile src={profile} />
          <span id="name" alt="">
            {comment.author_username}
          </span>
          <span>·</span>
          <span id="time" alt="">
            {comment.created_at}
          </span>
        </Writer>
        <BtnBox>
          <Btn alt="댓글 좋아요 버튼" onClick={handleLike} liked={likeStatus}>
            <img src={likeImgSrc} />
            <span liked={likeStatus}>{comment.relikes_count}</span>
          </Btn>
        </BtnBox>
      </Info>
      <Content showMore={showMore}>{comment.content}</Content>
      {!showMore && comment.content.length > 100 && (
        <ShowMoreButton alt="더보기 버튼" onClick={handleShowMore}>
          더보기
        </ShowMoreButton>
      )}
    </Wrapper>
  );
};

export default ReComment;

const Wrapper = styled.div`
  width: 284px;
  display: flex;
  padding: 20px 32px 20px 44px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const Content = styled.div`
  padding: 0px 12px;
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
  align-items: center;
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
  span {
    padding-top: 4px;
  }
  #time {
    color: var(--p-primary-30, #004a77);
  }
`;

const Profile = styled.img`
  display: flex;
  width: 16px;
  height: 16px;
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
    color: ${({ liked }) =>
      liked ? "var(--p-primary-40, #00639c)" : "var(--n-neutral-10, #1a1c1e)"};
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
