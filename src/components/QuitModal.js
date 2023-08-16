import React from "react";
import { styled } from "styled-components";

const QuitModal = ({ onClose, onDelete }) => {
  return (
    <Wrapper>
      <Modal>
        <p>
          회원탈퇴 시 <br /> 계정에 관한 모든 정보가 삭제됩니다. <br /> 정말
          탈퇴하시겠어요?
        </p>
        <Buttons>
          <button id="back" onClick={onClose}>
            취소
          </button>
          <button id="quit" onClick={onDelete}>
            탈퇴하기
          </button>
        </Buttons>
      </Modal>
    </Wrapper>
  );
};

export default QuitModal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 130;
  width: 360px;
  height: 800px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  display: flex;
  width: 240px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--n-neutral-100, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 51, 84, 0.04);
  p {
    color: var(--n-neutral-10, #1a1c1e);
    text-align: center;
    font-family: Pretendard;
    font-size: 0.88rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

const Buttons = styled.div`
  display: flex;
  height: 44px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  button {
    width: 120px;
    background-color: transparent;
    border: none;
    text-align: center;
    font-family: Pretendard;
    font-size: 0.88rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  #back {
    color: var(--n-neutral-10, #1a1c1e);
  }
  #quit {
    color: var(--error-error-40, #ba1a1a);
  }
`;
