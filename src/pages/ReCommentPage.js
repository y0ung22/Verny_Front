import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import Comment from "../components/Comment";
import ReComment from "../components/ReComment";
import WriteComment from "../components/WriteComment";
import MenuBar from "../components/MenuBar";
import axios from "axios";

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const commentId = location.state.id;

  const BASE_URL = "https://yewon1209.pythonanywhere.com";

  //대댓글 목록 받아오기
  const getReComment = async (id) => {
    await axios
      .get(`${BASE_URL}/main/comments/${id}/recomments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => console.log(error));
  };

  console.log(comments);

  useEffect(() => {
    getReComment(commentId);
  }, []);

  //<Comment/> 컴포넌트 빼둔 상태!!
  return (
    <Wrapper>
      <TopBar />

      <CommentList>
        {comments &&
          comments.map((comment) => (
            <ReComment key={comment.id} comment={comment} />
          ))}
        <ReComment />
      </CommentList>
      <WriteComment />
      <MenuBar />
    </Wrapper>
  );
};

export default CommentPage;

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
