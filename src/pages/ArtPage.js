import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import TopBar from "../components/TopBar";
import SearchBar from "../components/SearchBar";
import ArtBox from "../components/ArtBox";
import MenuBar from "../components/MenuBar";
import Write from "../assets/icons/write.svg";
import WriteHover from "../assets/icons/writeHover.svg";

const ArtPage = () => {
  //미술품 카테고리
  const categories = ["전체", "고전미술", "현대미술"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const BASE_URL = "https://yewon1209.pythonanywhere.com";
  const [arts, setArts] = useState([]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  //미술품 작성 버튼 호버 시 이미지 경로 변경
  const [isHovered, setIsHovered] = useState(false);

  const MouseHover = () => {
    setIsHovered(true);
  };
  const MouseLeave = () => {
    setIsHovered(false);
  };

  //리렌더링
  useEffect(() => {
    getAllArts();
  }, []);

  //미술품 정보 불러오기
  const getAllArts = async () => {
    await axios
      .get(`${BASE_URL}/main/posts/`)
      .then((response) => {
        setArts(response.data.posts);
      })
      .catch((error) => console.log(error));
  };

  console.log(arts);

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
      <ArtCnt>작품 {arts.length}개를 감상해보세요!</ArtCnt>
      <ArtList>
        {arts && arts.map((art) => <ArtBox key={art.id} art={art} />)}
      </ArtList>
      <Link to="/art/upload" style={{ textDecoration: "none" }}>
        <WriteArtBtn onMouseEnter={MouseHover} onMouseLeave={MouseLeave}>
          <img src={isHovered ? WriteHover : Write} />
        </WriteArtBtn>
      </Link>
      <MenuBar />
    </Wrapper>
  );
};

export default ArtPage;

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
`;

const WriteArtBtn = styled.button`
  position: absolute;
  right: 45px;
  bottom: 120px;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  background-color: transparent;
  border: none;
`;
