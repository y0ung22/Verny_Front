import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import comment from "../assets/icons/comment.svg";
import bookmark from "../assets/icons/bookmark.svg";

const ButtonBar = () => {
  const navigate = useNavigate();

  const moveComment = () => {
    navigate("/art/detail/comment");
  };

  return (
    <Wrapper>
      <Btn onClick={moveComment}>
        <img src={comment} />
        <span>100</span>
      </Btn>
      <Btn>
        <img src={bookmark} />
        <span>100</span>
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
`;
