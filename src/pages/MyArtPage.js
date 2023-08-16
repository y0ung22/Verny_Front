import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { http } from "../api/Http";

import TopBar from "../components/TopBar";
import ArtBox from "../components/ArtBox";
import MenuBar from "../components/MenuBar";

const MyArtPage = () => {
  //미술품 카테고리
  const categories = ["전체", "고전미술", "현대미술"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [arts, setArts] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  //리렌더링
  useEffect(() => {
    getAllArts();
  }, []);

  //내가 작성한 미술품 정보 불러오기
  const getAllArts = async () => {
    try {
      const response = await http.get("/account/mypage/my_posted");
      setArts(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredArts =
    selectedCategory === "전체"
      ? arts
      : arts.filter((art) => art.type === selectedCategory);

  console.log(arts);

  return (
    <Wrapper>
      <TopBar />
      <CategoryBar>
        {categories.map((category, index) => (
          <Category
            key={index}
            id={category}
            isSelected={category === selectedCategory}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Category>
        ))}
      </CategoryBar>
      <ArtCnt>작품 {filteredArts.length}개를 감상해보세요!</ArtCnt>
      <ArtList>
        {filteredArts.length > 0 ? (
          filteredArts.map((art) => <ArtBox key={art.id} art={art} />)
        ) : (
          <p>작성한 글이 없습니다.</p>
        )}
      </ArtList>
      <MenuBar />
    </Wrapper>
  );
};

export default MyArtPage;

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  width: 360px;
  height: 800px;
  background: var(--n-neutral-100, #fff);
  display: flex;
  flex-direction: column;
`;

const CategoryBar = styled.div`
  display: flex;
  width: 328px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: var(--n-neutral-100, #fff);
`;

const Category = styled.div`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;
  color: ${(props) =>
    props.isSelected
      ? "var(--t-teritary-40, #745470)"
      : "var(--p-primary-10, #001d33)"};

  text-align: center;
  font-family: Pretendard;
  font-size: 0.88rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  border-bottom: ${(props) =>
    props.isSelected ? "2px solid var(--t-teritary-40, #745470);" : "none"};
`;

const ArtCnt = styled.div`
  display: flex;
  width: 312px;
  height: 48px;
  height: 44px;
  padding: 0px 24px;
  align-items: center;
  flex-shrink: 0;
  background: var(--n-neutral-100, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 51, 84, 0.04);
  color: var(--s-secondary-40, #52606f);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const ArtList = styled.div`
  margin: 0px 16px;
  padding-top: 20px;
  padding-bottom: 30px;
  height: 430px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: var(--n-neutral-10, #1a1c1e);
    font-family: Pretendard;
    font-size: 0.88rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;
