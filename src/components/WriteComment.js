import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const WriteComment = () => {
  return (
    <Wrapper>
      <form className="input-container">
        <Input type="text" placeholder="댓글을 입력해주세요!" />
        <SubmitButton>등록</SubmitButton>
      </form>
    </Wrapper>
  );
};

export default WriteComment;

const Wrapper = styled.div`
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
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
