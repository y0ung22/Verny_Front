import React, { useState } from "react";
import { VariableSizeList } from "react-window";
import PlaceData from "../database/PlaceData.json";
import styled from "styled-components";

const MainPlaceList = () => {
  const [visibleData, setVisibleData] = useState(PlaceData.slice(0, 20)); // 초기에 보여줄 데이터

  // 스크롤 위치를 기억하는 상태 변수
  const [scrollOffset, setScrollOffset] = useState(0);

  // 가변 크기 리스트에서 아이템의 실제 높이를 반환하는 함수
  const getItemSize = (index) => {
    return 50; // 각 아이템의 높이
  };

  // 스크롤 시 추가 데이터 로드
  const handleScroll = ({ scrollOffset }) => {
    setScrollOffset(scrollOffset);

    if (scrollOffset > visibleData.length * 30 - 300) {
      // 스크롤이 끝에 가까워질 때 추가 데이터 로드
      const newData = PlaceData.slice(
        visibleData.length,
        visibleData.length + 20
      );
      setVisibleData((prevData) => [...prevData, ...newData]);
    }
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error("복사 실패", error);
    }
  };

  const Row = ({ index, style }) => {
    const place = visibleData[index];
    return (
      <li
        style={{
          marginBottom: "2px",
          marginLeft: "28px",
          width: "300px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div className="name-category">
          <p
            style={{
              /*width: "86px",*/
              fontSize: "1rem",
              fontWeight: "400",
              lineHeight: "140%",
              color: "var(--n-neutral-10, #1A1C1E)",
              fontFamily: "Pretendard",
              fontStyle: "normal",
              overflow: "hidden",
            }}
          >
            {place.name}
          </p>
          <p
            style={{
              /*width: "70px",*/
              fontSize: "0.75rem",
              fontWeight: 400,
              lineHeight: "140%",
              color: "var(--s-secondary-40, #52606F)",
              fontFamily: "Pretendard",
              fontStyle: "normal",
            }}
          >
            {place.category}
          </p>
        </div>
        <p
          style={{
            width: "130px",
            fontSize: "0.75rem",
            fontWeight: 400,
            lineHeight: "140%",
            color: "var(--n-neutral-40, #5D5E61)",
            fontFamily: "Pretendard",
            fontStyle: "normal",
          }}
        >
          {place.address}
        </p>
        <button
          onClick={() => handleCopy(place.address)}
          style={{
            width: "70px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            border: "none",
            borderRadius: "12px",
            background: "var(--p-primary-90, #CFE5FF)",
            fontSize: "0.75rem",
            fontWeight: 400,
            lineHeight: "140%",
            color: "var(--p-primary-10, #001D33)",
            fontFamily: "Pretendard",
            fontStyle: "normal",
            cursor: "pointer",
          }}
        >
          주소복사
        </button>
      </li>
    );
  };

  return (
    <PlaceListWrapper>
      <VariableSizeList
        width={360}
        height={300} // 리스트 높이
        itemCount={visibleData.length} // 보여질 아이템 개수
        itemSize={getItemSize} // 각 아이템의 높이를 반환하는 함수 사용
        onScroll={handleScroll}
        scrollToItem={scrollOffset}
        overscanCount={50}
      >
        {Row}
      </VariableSizeList>
    </PlaceListWrapper>
  );
};

const PlaceListWrapper = styled.div`
  width: 320px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 70px;

  /* .list-block {
    margin-left: 20px;
    width: 320px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  } */

  .name-category {
    width: 120px;
  }
`;

export default MainPlaceList;
