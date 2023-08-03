import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../components/TopBar";
import SearchBar from "../components/SearchBar";
import ArtBox from "../components/ArtBox";
import MenuBar from "../components/MenuBar";

const ArtPage = () => {
  const categories = ["전체", "고전미술", "현대미술"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Initially, the first category is selected.

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Wrapper>
      <TopBar />
      <SearchBar />
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
      <ArtList>
        <ArtBox />
        <ArtBox />
        <ArtBox />
        <ArtBox />
      </ArtList>
      <MenuBar />
    </Wrapper>
  );
};

export default ArtPage;

const Wrapper = styled.div`
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
    props.isSelected ? "1.5px solid var(--t-teritary-40, #745470);" : "none"};
`;

const ArtList = styled.div`
  margin: 0px 16px;
  margin-top: 20px;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
