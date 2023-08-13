import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import Comment from "../components/Comment";
import WriteComment from "../components/WriteComment";
import MenuBar from "../components/MenuBar";

const CommentPage = () => {
  const location = useLocation();
  const artId = location.state.id;
  const [lists, setLists] = useState([]);

  const BASE_URL = "https://yewon1209.pythonanywhere.com";

  useEffect(() => {
    getComments(artId);
  }, [artId]);

  const getComments = async (id) => {
    await axios
      .get(`${BASE_URL}/main/posts/${id}/comments/`)
      .then((response) => {
        setLists(response.data);
      })
      .catch((error) => console.log(error));
  };

  console.log(lists);

  return (
    <Wrapper>
      <TopBar />
      <CommentList>
        {lists && lists.map((list) => <Comment key={list.id} list={list} />)}
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
