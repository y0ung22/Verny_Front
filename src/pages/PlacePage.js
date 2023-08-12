import React, { useState } from "react";

import { Map, MapMarker } from "react-kakao-maps-sdk";
import TopBar from "../components/TopBar";
import MenuBar from "../components/MenuBar";
import PlaceList from "../components/PlaceList";
import PlaceData from "../database/PlaceData.json";

import styled from "styled-components";

import search from "../assets/icons/search.svg";
import filter from "../assets/icons/filter.svg";
import filterchecked from "../assets/icons/filterChecked.svg";
import banner from "../assets/etc/banner.svg";
import dropdownClosed from "../assets/icons/dropdownClosed.svg";
import dropdownOpened from "../assets/icons/dropdownOpened.svg";
import filterInit from "../assets/icons/filterInit.svg";
import close from "../assets/icons/close.svg";
import pin from "../assets/icons/pin.svg";
import pinHover from "../assets/icons/pinHover.svg";
import delBtn from "../assets/icons/deleteSecondary.svg";
import pinClicked from "../assets/icons/pinClicked.svg";

const PlacePage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const handleFilterClick = () => {
    setFilterOpen(!filterOpen);
  };

  const handleSortClick = () => {
    setSortOpen(!sortOpen);
  };

  const handleCloseModal = () => {
    setFilterOpen(false);
    setSortOpen(false);
  };

  const locations = PlaceData.map((place) => ({
    title: place.name,
    latlng: { lat: place.latitude, lng: place.longitude },
  }));

  const [isHovered, setIsHovered] = useState(false);

  const handleMarkerHover = (index, hover) => {
    // index 번째 마커의 hover 상태를 설정
    setIsHovered((prevState) => {
      const newState = [...prevState];
      newState[index] = hover;
      return newState;
    });
  };

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const deleteText = () => {
    setText("");
  };

  return (
    <Wrapper>
      <TopBar />
      <Banner />
      <SearchFilter>
        <InputContainer>
          <Input
            type="text"
            placeholder="검색어를 입력해주세요!"
            onChange={onChange}
            value={text}
          />
          {text && (
            <DeleteBtn onClick={deleteText}>
              <img src={delBtn} alt="검색어 삭제 버튼" />
            </DeleteBtn>
          )}
        </InputContainer>
        <SFBtn>
          <img className="search-icon" src={search} alt="검색 버튼" />
          <img
            className="filter-icon"
            src={filterOpen ? filterchecked : filter}
            alt="필터 버튼"
            onClick={handleFilterClick}
          />
        </SFBtn>
      </SearchFilter>
      <SortBtn>
        <span
          style={{
            color: "var(--s-secondary-40, #52606F)",
            fontFamily: "Pretendard",
            fontSize: "0.75rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "140%",
          }}
        >
          1만 개 이상의 문예관광지를 만나보세요!
        </span>
        <button onClick={handleSortClick}>정렬</button>
        <img
          className="dropdown-icon"
          src={sortOpen ? dropdownOpened : dropdownClosed}
          alt="드롭다운 기호"
        />
      </SortBtn>

      {filterOpen && <Backdrop onClick={handleCloseModal} />}
      <FilterModal
        isOpen={filterOpen}
        onRequestClose={handleCloseModal}
        contentLabel="필터"
      >
        <FilterTop>
          <p
            style={{
              color: " var(--n-neutral-10, #1A1C1E)",
              fontFamily: "Pretendard",
              fontSize: "1.25rem",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "140%",
              marginLeft: "10px",
            }}
          >
            필터
          </p>
          <div className="filter-top-img">
            <img className="filter-init" src={filterInit} alt="필터 초기화" />
            <p
              style={{
                color: " var(--n-neutral-10, #1A1C1E)",
                fontFamily: "Pretendard",
                fontSize: "0.75rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "140%",
              }}
            >
              필터 초기화
            </p>
            <div className="close-icon-wrapper" onClick={handleCloseModal}>
              <img className="close-icon" src={close} alt="닫기" />
            </div>
          </div>
        </FilterTop>
        <FilterContent>
          <Category>
            <p
              style={{
                color: " var(--n-neutral-10, #1A1C1E)",
                fontFamily: "Pretendard",
                fontSize: "1rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "140%",
              }}
            >
              카테고리
            </p>
            <div className="first-line">
              <button>모두 선택</button>
              <button>레저/체육/공원</button>
              <button>문화관광/명소</button>
            </div>
            <div className="second-line">
              <button>전시/공연</button>
            </div>
          </Category>
          <Parking>
            <p
              style={{
                color: " var(--n-neutral-10, #1A1C1E)",
                fontFamily: "Pretendard",
                fontSize: "1rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "140%",
              }}
            >
              주차시설
            </p>
            <div className="first-line">
              <button>모두 선택</button>
              <button>무료주차</button>
              <button>유료주차</button>
            </div>
            <div className="second-line">
              <button>장애인 주차</button>
              <button>대형차 주차</button>
            </div>
          </Parking>
          <Inside>
            <p
              style={{
                color: " var(--n-neutral-10, #1A1C1E)",
                fontFamily: "Pretendard",
                fontSize: "1rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "140%",
              }}
            >
              내부시설
            </p>
            <div className="line">
              <button>모두 선택</button>
              <button>장애인화장실</button>
              <button>휠체어 대여</button>
            </div>
          </Inside>
          <Guide>
            <p
              style={{
                color: " var(--n-neutral-10, #1A1C1E)",
                fontFamily: "Pretendard",
                fontSize: "1rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "140%",
              }}
            >
              가이드
            </p>
            <div className="line">
              <button>모두 선택</button>
              <button>점자가이드</button>
              <button>한국어 오디오가이드</button>
            </div>
          </Guide>
        </FilterContent>
        <FilterBtn>
          <button
            style={{
              width: "320px",
              height: "46px",
              display: "flex",
              padding: "12px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              alignSelf: "stretch",
              borderRadius: "12px",
              border: "none",
              background: "var(--p-primary-40, #00639C)",
              color: "white",
            }}
          >
            필터 적용
          </button>
        </FilterBtn>
      </FilterModal>

      {/* <SortModal
            isOpen={sortOpen}
            onRequestClose={handleCloseModal}
            contentLabel="정렬"
          >
            <button>
              <p>정렬</p>
            </button>
            <button>
              <p>거리순</p>
            </button>
            <button>
              <p>가나다순</p>
            </button>
          </SortModal> */}

      <Map
        center={{
          // 지도의 중심좌표
          lat: 37.58153269,
          lng: 127.002336,
        }}
        style={{
          // 지도의 크기
          width: "320px",
          height: "234px",
          borderRadius: "12px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        level={5} // 지도의 확대 레벨
      >
        {locations.map((loc, idx) => (
          <MapMarker
            key={`${loc.title}-${loc.latlng}`}
            position={loc.latlng}
            image={{
              src: isHovered[idx] ? pinHover : pin,
              size: { width: 36, height: 35 },
            }}
            title={loc.title}
            onMouseEnter={() => handleMarkerHover(idx, true)}
            onMouseLeave={() => handleMarkerHover(idx, false)}
          />
        ))}
      </Map>
      <PlaceList />
      <MenuBar />
    </Wrapper>
  );
};

export default PlacePage;

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

const Banner = styled.div`
  display: flex;
  width: 360px;
  height: 64px;
  flex-shrink: 0;
  background-image: url(${banner});
  background-size: auto;
  background-position: center center;
`;

const SearchFilter = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 328px;
  padding: 8px 16px;
  gap: 8px;
  background: var(--n-neutral-100, #fff);
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  /* width: 321px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px 4px 20px;
  gap: 30px;

  input {
    display: flex;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 12px;
    border: 1.5px solid var(--s-secondary-80, #b9c8da);
    background: var(--s-secondary-99, #fcfcff);
    outline: none;
  }

  input::placeholder {
    flex: 1 0 0;
    color: var(--s-secondary-10, #0e1d2a);
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  } */
`;

const Input = styled.input`
  width: 216px;
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;
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

const SFBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
  img {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    margin-right: 16px;
    cursor: pointer;
  }
`;

const DeleteBtn = styled.div`
  margin-left: -40px;
  display: flex;
  width: 16px;
  height: 16px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

const SortBtn = styled.div`
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

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--s-secondary-40, #52606f);
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-left: 30px;
  }
  img {
    width: 12px;
    height: 12px;
    margin-left: 40px;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: auto;
  width: 360px;
  height: 590px;
  /* margin-left: 194px; */
  opacity: 0.5;
  background: var(--n-neutral-0, #000);
  z-index: 1;
`;

const FilterModal = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: absolute;
  top: 52px;
  left: auto;
  width: 360px;
  height: 650px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  border-radius: 12px 12px 0px 0px;
  background: var(--nv-neutral-variant-99, #fcfcff);
  z-index: 2;
`;
const FilterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 345px;
  height: 48px;
  margin-top: 10px;
  margin-left: 3px;
  margin-bottom: -40px;

  .filter-top-img {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .filter-init {
    display: flex;
    width: 12px;
    height: 12px;
    padding: 6px;
    justify-content: center;
    align-items: center;
  }

  .close-icon-wrapper {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-right: 10px;
    cursor: pointer;
  }

  .close-icon {
    width: 14px;
    height: 14px;
    padding: 12px;
  }
`;

const FilterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  margin-left: -25px;
  margin-top: 5px;

  button {
    display: flex;
    padding: 8px 16px 8px 16px;
    border-radius: 20px;
    border-radius: 20px;
    border: 1.5px solid var(--s-secondary-20, #243240);
    background: var(--n-neutral-100, #fff);
    margin-left: 2px;
    margin-right: 2px;
    color: var(--n-neutral-0, #000);
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    &:hover {
      background: var(--s-secondary-20, #243240);
      color: white;
      cursor: pointer;
    }
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;

  .first-line {
    display: flex;
    flex-direction: row;
  }
  .second-line {
    display: flex;
    flex-direction: row;
  }
`;

const Parking = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;

  .first-line {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .second-line {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Inside = styled.div`
  .line {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Guide = styled.div`
  .line {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const FilterBtn = styled.div``;
// const SortModal = styled.div`
//   position: absolute;
//   padding: 0px 10px 0px 250px;
//   margin-top: 100px;
//   display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 85.505px;
//   height: 103.55px;
//   z-index: 2;

//   button {
//     display: flex;
//     width: 85.505px;
//     height: 34.516px;
//     padding: 9.723px 10.15px 9.794px 52.355px;
//     align-items: center;
//     flex-shrink: 0;
//     border: 1px solid #000;
//     background: #a5a5a5;
//     flex-direction: row;
//   }
//   p {
//     color: #000;
//     font-family: Inter;
//     font-size: 12px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
//   }
// `;
