import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import Comment from "../components/Comment";
import ReComment from "../components/ReComment";
import MenuBar from "../components/MenuBar";

const ReCommentPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const location = useLocation();
  const commentId = location.state.id;

  const BASE_URL = "https://yewon1209.pythonanywhere.com";

  //답글 목록 받아오기
  const getReComments = async (id) => {
    await axios
      .get(`${BASE_URL}/main/comments/${id}/recomments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => console.log(error));
  };

  console.log(comments);

  useEffect(() => {
    getReComments(commentId);
  }, [commentId]);

  //답글 작성하기
  const uploadReComment = async (e, id) => {
    e.preventDefault();
    await axios
      .post(`${BASE_URL}/main/comments/${id}/recommentsadd/`, {
        content: newComment,
      })
      .then((response) => {
        setNewComment(response.data);
        setNewComment("");
        getReComments();
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  //원댓글 출력 제외한 상태!
  return (
    <Wrapper>
      <TopBar />
      <CommentList>
        {comments &&
          comments.map((comment) => (
            <ReComment key={comment.id} comment={comment} />
          ))}
      </CommentList>
      <WriteComment>
        <form className="input-container">
          <Input
            type="text"
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            placeholder="내용을 입력해주세요!"
          />
          <SubmitButton onSubmit={uploadReComment(commentId)}>
            등록
          </SubmitButton>
        </form>
      </WriteComment>
      <MenuBar />
    </Wrapper>
  );
};

export default ReCommentPage;

const Wrapper = styled.div`
  margin: auto;
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommentList = styled.div`
  height: 500px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const WriteComment = styled.div`
  position: absolute;
  top: 632.6px;
  width: 328px;
  padding: 8px 16px;
  background: var(--nv-neutral-variant-95, #edf1f9);
  form {
    display: flex;
    gap: 8px;
  }
`;

const Input = styled.input`
  width: 228px;
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 12px;
  border: 1.5px solid var(--s-secondary-80, #b9c8da);
  background: var(--s-secondary-99, #fcfcff);
  outline: none;
  color: var(--s-secondary-10, #0e1d2a);
  font-family: Pretendard;
  font-size: 0.88rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const SubmitButton = styled.button`
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: var(--p-primary-40, #00639c);
  border: none;

  color: var(--p-primary-100, #fff);
  font-family: Pretendard;
  font-size: 0.88rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
