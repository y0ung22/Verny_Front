import React from "react";
import axios from "axios";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import Comment from "../components/Comment";
import WriteComment from "../components/WriteComment";
import MenuBar from "../components/MenuBar";

const CommentPage = () => {
  const BASE_URL = "https://yewon1209.pythonanywhere.com";

  const getComments = async () => {
    await axios
      .get(`${BASE_URL}/main/posts/<int:pk>/comments/`)
      .then((response) => {})
      .catch((error) => console.log(error));
  };
  return (
    <Wrapper>
      <TopBar />
      <CommentList>
        <Comment />
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
