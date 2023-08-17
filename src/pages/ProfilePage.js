import React, { useState, useEffect } from "react";
import { http } from "../api/Http";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import MenuBar from "../components/MenuBar";
import profileImg from "../assets/icons/profileImg3.svg";
import Comment from "../components/Comment";
import ReComment from "../components/ReComment";

const ProfilePage = () => {
  const [userId, setUserId] = useState("");
  const [myComments, setMyComments] = useState([]);
  const [myReComments, setMyReComments] = useState([]);

  useEffect(() => {
    getId();
    getMyComments();
    getMyReComments();
  }, []);

  const getId = async () => {
    try {
      const response = await http.get("/account/mypage");
      setUserId(response.data.data.username);
    } catch (error) {
      console.log(error);
    }
  };

  //댓글 조회
  const getMyComments = async () => {
    try {
      const response = await http.get("/account/mypage/my_comments/");
      setMyComments([...response.data.data]);
      console.log([...response.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  //답글 조회
  const getMyReComments = async () => {
    try {
      const response = await http.get("/account/mypage/my_recomments/");
      setMyReComments([...response.data.data]);
      console.log([...response.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <TopBar />
      <UserInfo>
        <UserImg>
          <img src={profileImg} />
        </UserImg>
        <UserId>{userId}</UserId>
      </UserInfo>
      <MyComment>
        <CommentList>
          <CommentBar>아이디 님이 쓴 댓글</CommentBar>
          {myComments.length > 0 ? (
            myComments.map((comment) => (
              <Comment key={comment.id} list={comment} />
            ))
          ) : (
            <p>내가 작성한 댓글이 없습니다.</p>
          )}
          <Comment />
        </CommentList>
        <CommentList>
          <CommentBar id="recomment">아이디 님이 쓴 답글</CommentBar>
          {myReComments.length > 0 ? (
            myReComments.map((comment) => (
              <ReComment
                key={comment.id}
                comment={comment}
                artId={comment.post}
              />
            ))
          ) : (
            <p>내가 작성한 답글이 없습니다.</p>
          )}
        </CommentList>
      </MyComment>
      <MenuBar />
    </Wrapper>
  );
};

export default ProfilePage;

const Wrapper = styled.div`
  margin: auto;
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  margin-top: 20px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const UserImg = styled.div`
  display: flex;
  width: 67.5px;
  height: 67.5px;
  justify-content: center;
  align-items: center;
  img {
    width: 33.75px;
    height: 33.75px;
    flex-shrink: 0;
  }
`;

const UserId = styled.div`
  margin-bottom: 32px;
  color: var(--s-secondary-30, #3a4857);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const MyComment = styled.div`
  height: 500px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CommentList = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding-top: 10px;
    color: var(--n-neutral-10, #1a1c1e);
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

const CommentBar = styled.div`
  display: flex;
  padding: 16px 32px;
  align-items: center;
  align-self: stretch;
  background: var(--nv-neutral-variant-95, #edf1f9);
  color: var(--s-secondary-20, #243240);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  #recomment {
    padding-top: 100px;
  }
`;
