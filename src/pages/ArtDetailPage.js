import React from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import ButtonBar from "../components/ButtonBar";
import MenuBar from "../components/MenuBar";
import testImg from "../assets/etc/text.jpg";

const ArtDetailPage = () => {
  return (
    <Wrapper>
      <TopBar />
      <ButtonBar />
      <MenuBar />
    </Wrapper>
  );
};

export default ArtDetailPage;

const Wrapper = styled.div`
  margin: auto;
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);
  display: flex;
  flex-direction: column;
`;
