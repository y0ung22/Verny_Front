import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import MenuBar from "../components/MenuBar";
import plus from "../assets/icons/plus.svg";

const UploadArtPage = () => {
  return (
    <Wrapper>
      <TopBar />
      <UploadBtn>업로드</UploadBtn>
      <Container>
        <UploadImg>
          <img src={plus} />
        </UploadImg>
        <AltInput>
          <span>대체텍스트</span>
          <input
            id="altText"
            placeholder="작품 이미지 관련 대체텍스트를 입력해주세요!"
          />
        </AltInput>
        <ContentInput>
          <Content>
            <span>작품명</span>
            <input id="title" placeholder="작품명을 입력해주세요!" />
          </Content>
          <Content>
            <span>작가명</span>
            <input id="artist" placeholder="작가명을 입력해주세요!" />
          </Content>
          <Content>
            <span>기법</span>
            <input id="method" placeholder="작품에 쓰인 기법을 입력해주세요!" />
          </Content>
          <Content>
            <span>연도</span>
            <input id="year" placeholder="작품을 제작한 연도를 입력해주세요!" />
          </Content>
        </ContentInput>
      </Container>
      <MenuBar />
    </Wrapper>
  );
};

export default UploadArtPage;

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadBtn = styled.button`
  position: absolute;
  top: 44px;
  right: 16px;
  border: none;
  border-radius: 12px;
  background: var(--p-primary-40, #00639c);
  display: inline-flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: var(--p-primary-100, #fff);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const Container = styled.div`
  display: flex;
  width: 328px;
  height: 570px;
  padding: 0px 16px 40px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  flex: 1 0 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UploadImg = styled.div`
  display: flex;
  width: 328px;
  height: 197px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.5);
  img {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
  }
`;

const AltInput = styled.div`
  display: flex;
  padding: 0px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  span {
    color: var(--n-neutral-10, #1a1c1e);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  input {
    display: flex;
    padding: 16px 4px;
    gap: 8px;
    align-self: stretch;
    border: none;
    outline: none;
    border-bottom: 1.5px solid var(--s-secondary-50, #6a7889);
    color: var(--s-secondary-10, #0e1d2a);
    opacity: 0.6000000238418579;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

const ContentInput = styled.div`
  display: flex;
  padding: 0px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  span {
    width: 49px;
    color: var(--n-neutral-10, #1a1c1e);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  input {
    width: 247px;
    display: flex;
    padding: 16px 4px;
    gap: 8px;
    align-self: stretch;
    border: none;
    outline: none;
    border-bottom: 1.5px solid var(--s-secondary-50, #6a7889);
    color: var(--s-secondary-10, #0e1d2a);
    opacity: 0.6000000238418579;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;
