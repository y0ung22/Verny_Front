import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);
`;

// 대부분 영역에 공통적으로 적용되는 흰 색 바탕 따로 빼서 만듦
// return 부분 <Container></Container>로 감싸면 일괄 적용됨
// 페이지 여러 개 만든 경우에는 각 return마다 적용해야 됨
