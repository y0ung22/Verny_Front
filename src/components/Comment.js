import React, { useState } from "react";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import profile from "../assets/icons/profileBasic.svg";
import like from "../assets/icons/like.svg";
import likeClicked from "../assets/icons/likeClicked.svg";
import edit from "../assets/icons/edit.svg";
import del from "../assets/icons/delete.svg";
import commentWrite from "../assets/icons/commentWrite.svg";

const Comment = ({ list }) => {
  const [showMore, setShowMore] = useState(false);
  const [likeStatus, setLikeStatus] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  //더보기 버튼
  const handleShowMore = () => {
    setShowMore(true);
  };

  //댓글 좋아요 기능
  const handleLike = () => {
    setLikeStatus(!likeStatus);
  };

  const moveReComment = () => {
    navigate("/art/detail/comment/re");
  };

  return (
    <Wrapper pathname={pathname}>
      <Info>
        <Writer>
          <Profile src={profile} />
          <span id="name" alt="">
            {list.author}
          </span>
          <span>·</span>
          <span id="time" alt="">
            {list.created_at}
          </span>
        </Writer>
        <BtnBox>
          <Btn alt="댓글 좋아요 버튼" onClick={handleLike} liked={likeStatus}>
            <img src={likeStatus ? likeClicked : like} />
            <span liked={likeStatus}>{list.likes_count}</span>
          </Btn>
        </BtnBox>
      </Info>
      <Content showMore={showMore}>{list.content}</Content>
      {!showMore && list.content.length > 100 && (
        <ShowMoreButton alt="더보기 버튼" onClick={handleShowMore}>
          더보기
        </ShowMoreButton>
      )}
      {pathname !== "/art/detail/comment/re" && (
        <ReComment>
          <ReCommentBtn onClick={moveReComment}>
            <img src={commentWrite} />
            <span>{list.recomments_count}</span>
            <span>답글 쓰기</span>
          </ReCommentBtn>
        </ReComment>
      )}
    </Wrapper>
  );
};

export default Comment;

const Wrapper = styled.div`
  background-color: ${({ pathname }) =>
    pathname === "/art/detail/comment/re"
      ? "var(--nv-neutral-variant-95, #EDF1F9)"
      : "var(--n-neutral-100, #FFF)"};
  width: 308px;
  display: flex;
  padding: 20px 32px 20px 20px;
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

const ReComment = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ReCommentBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: var(--p-primary-40, #00639c);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  img {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }
`;
