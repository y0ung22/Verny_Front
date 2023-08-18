import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { http } from "../api/Http";

import profileImg from "../assets/icons/profileImg3.svg";
import like from "../assets/icons/like.svg";
import likeClicked from "../assets/icons/likeClicked.svg";
import edit from "../assets/icons/edit.svg";
import del from "../assets/icons/delete.svg";
import commentWrite from "../assets/icons/commentWrite.svg";

const Comment = ({ list, artId, updateCommentList }) => {
  const [showMore, setShowMore] = useState(false);
  const [userpk, setUserpk] = useState("");
  const [username, setUsername] = useState("");
  const [likeStatus, setLikeStatus] = useState(false);
  const [likeImgSrc, setLikeImgSrc] = useState(like);
  const navigate = useNavigate();

  const BASE_URL = "https://yewon1209.pythonanywhere.com";

  useEffect(() => {
    getUsername();
  }, []);

  /*  //더보기 버튼 상태 관리
  const handleShowMore = () => {
    setShowMore(true);
  }; */

  const getUsername = async () => {
    try {
      const response = await http.get("/account/mypage");
      setUsername(response.data.data.username);
      setUserpk(response.data.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  //댓글 좋아요 상태 관리
  const handleLike = async () => {
    try {
      const newLikeStatus = !likeStatus;
      setLikeStatus(newLikeStatus);

      await http.post(`/main/posts/${artId}/comments/${list.id}/likes/`, {
        liked: newLikeStatus,
      });
    } catch (error) {
      console.log(error);
    }
  };

  /*   //댓글 수정
  const editComment = async () => {
    try {
      await http.put(`/main/posts/${artId}/comments/${list.id}/`, {
        content: "수정 내용",
      });
    } catch (error) {
      console.log(error);
    }
  }; */

  //댓글 삭제
  const delComment = async () => {
    try {
      await http.delete(`/main/posts/${artId}/comments/${list.id}/`);
      updateCommentList(list.id);
    } catch (error) {
      console.log(error);
    }
  };

  const moveReComment = () => {
    navigate("/art/detail/comment/re", {
      state: { id: list.id, username: username },
    });
  };

  return (
    list && (
      <Wrapper>
        <Info>
          <Writer>
            <Profile src={profileImg} />
            <span id="name">{list.author_username}</span>
            <span>·</span>
            <span id="time">{list.created_at}</span>
          </Writer>
          <BtnBox>
            <Btn
              alt="댓글 좋아요 버튼"
              onClick={handleLike}
              isLiked={likeStatus}
            >
              <img src={likeImgSrc} />
              <span isLiked={likeStatus}>{list.likes_count}</span>
            </Btn>
            {username === list.author_username && (
              <EditBox>
                {/*  <img id="edit" src={edit} onClick={editComment}></img> */}
                <img id="del" src={del} onClick={delComment}></img>
              </EditBox>
            )}
          </BtnBox>
        </Info>
        <Content showMore={showMore}>{list.content}</Content>
        {/* {!showMore && list.content && list.content.length > 100 && (
          <ShowMoreButton alt="더보기 버튼" onClick={handleShowMore}>
            더보기
          </ShowMoreButton>
        )} */}
        <ReComment>
          <ReCommentBtn onClick={moveReComment}>
            <img src={commentWrite} />
            <span>{list.recomments_count}</span>
            <span>답글 쓰기</span>
          </ReCommentBtn>
        </ReComment>
      </Wrapper>
    )
  );
};

export default Comment;

const Wrapper = styled.div`
  background-color: var(--n-neutral-100, #fff);
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
  width: 272px;
  color: var(--n-neutral-10, #1a1c1e);
  /*   text-overflow: ${({ showMore }) =>
    showMore ? "initial" : "ellipsis"}; */
  font-family: Pretendard;
  font-size: 0.88rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  white-space: pre-wrap;
  /* .truncate-content {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  } */
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
  align-items: center;
  gap: 10px;
  #edit {
    margin-left: 6px;
    width: 11.5px;
    height: 11.5px;
  }
  #del {
    width: 27px;
    height: 27px;
    margin-bottom: 1px;
  }
`;

const EditBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  img {
    display: flex;
    align-items: center;
  }
  span {
    color: ${({ likeStatus }) =>
      likeStatus
        ? "var(--p-primary-40, #00639c)"
        : "var(--n-neutral-10, #1a1c1e)"};
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

const ShowMoreButton = styled.div`
  margin-left: 13px;
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
