import React from "react";
import styled from "styled-components";

const TopBar = () => {
  return (
    <Wrapper>
      <Title>{}</Title>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;
