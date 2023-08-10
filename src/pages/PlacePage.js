import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import TopBar from "../components/TopBar";
import MenuBar from "../components/MenuBar";

import styled from "styled-components";

import search from "../assets/icons/search.svg";
import filter from "../assets/icons/filter.svg";
import filterchecked from "../assets/icons/filterChecked.svg";
import banner from "../assets/etc/banner.svg";
import dropdownClosed from "../assets/icons/dropdownClosed.svg";
import dropdownOpened from "../assets/icons/dropdownOpened.svg";
import filterInit from "../assets/icons/filterInit.svg";
import close from "../assets/icons/close.svg";

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

  const handleCopy = async (text: String) => {
    try {
      await navigator.clipboard.writeText(text);

      alert("복사 성공");
    } catch (error) {
      alert("복사 실패");
    }
  };

  function ListBlock({ children }) {
    return (
      <div
        style={{
          display: "flex",
          padding: "2px 0px",
          alignItems: "center",
          gap: "15px",
          alignSelf: "stretch",
          border: "none",
        }}
      >
        {children}
      </div>
    );
  }

  function PlaceList() {
    const places = [
      {
        name: "001스테이지",
        category: "전시/공연",
        address: "서울특별시 종로구 대학로 116",
      },
      {
        name: "05스튜디오",
        category: "전시/공연",
        address: "경기도 파주시 탄현면 헤이리마을길 38-25",
      },
      {
        name: "072골프훈련소",
        category: "레저/체육",
        address: "경기도 안양시 동안구 흥안대로434번길 19-33",
      },
      {
        name: "1004섬수석미술관",
        category: "전시/공연",
        address: "전라남도 신안군 자은면 자은서부2길 508-68",
      },
      {
        name: "123GC",
        category: "레저/체육",
        address: "경기도 고양시 덕양구 통일로 43-168",
      },
      {
        name: "148아트스퀘어",
        category: "전시/공연",
        address: "경상북도 영주시 대학로 77",
      },
      {
        name: "153가족캠프",
        category: "문화관광/명소",
        address: "경기도 과천시 새술막길 10-17",
      },
      {
        name: "168아트스퀘어",
        category: "전시/공연",
        address: "충청북도 충주시 예성로 168",
      },
      {
        name: "1MSPACE",
        category: "전시/공연",
        address: "서울특별시 서대문구 연세로4길 27",
      },
      {
        name: "2.28민주운동기념회관",
        category: "전시/공연",
        address: "대구광역시 중구 2.28길 9",
      },
      {
        name: "2001아울렛 구로 어린이 소극장",
        category: "전시/공연",
        address: "서울특별시 구로구 중앙로1길 36",
      },

      // ... 더 많은 장소들
    ];

    return (
      <div>
        {places.map((place, index) => (
          <ListBlock key={index}>
            <div>
              <p
                style={{
                  width: "86px",
                  fontSize: "13.5px",
                  fontWeight: "400",
                  lineHeight: "140%",
                  color: "var(--n-neutral-10, #1A1C1E)",
                  fontFamily: "Pretendard",
                  fontStyle: "normal",
                }}
              >
                {place.name}
              </p>
              <p
                style={{
                  width: "70px",
                  fontSize: "12px",
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
            <div>
              <p
                style={{
                  width: "120px",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "140%",
                  color: "var(--n-neutral-40, #5D5E61)",
                  fontFamily: "Pretendard",
                  fontStyle: "normal",
                }}
              >
                {place.address}
              </p>
            </div>
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
                fontSize: "10.5px",
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
          </ListBlock>
        ))}
      </div>
    );
  }

  const locations = [
    { title: "001스테이지", latlng: { lat: 37.58153269, lng: 127.002336 } },
    { title: "05스튜디오", latlng: { lat: 37.78641343, lng: 126.698359 } },
    { title: "072골프훈련소", latlng: { lat: 37.39403098, lng: 126.976543 } },
    { title: "1004섬수석미술관", latlng: { lat: 34.8800925, lng: 125.996874 } },
    { title: "123GC", latlng: { lat: 37.64140522, lng: 126.903049 } },
    { title: "148아트스퀘어", latlng: { lat: 36.80700113, lng: 128.616142 } },
    { title: "153가족캠프", latlng: { lat: 37.42870998, lng: 126.991199 } },
    { title: "168아트스퀘어", latlng: { lat: 36.97189318, lng: 127.933612 } },
    { title: "1MSPACE", latlng: { lat: 37.55760078, lng: 126.938198 } },
    {
      title: "2.28민주운동기념회관",
      latlng: { lat: 35.85840431, lng: 128.590354 },
    },
    {
      title: "2001아울렛 구로 어린이 소극장",
      latlng: { lat: 37.49807255, lng: 126.862677 },
    },
  ];

  return (
    <Wrapper>
      <TopBar />
      <Banner />
      <SearchFilter>
        <input
          type="text"
          //   value={confirmedPw}
          //   onChange={(e) => setConfirmedPw(e.target.value)}
          placeholder="검색어를 입력해주세요!"
        />
        <img className="search-icon" src={search} alt="검색" />
        <img
          className="filter-icon"
          src={filterOpen ? filterchecked : filter}
          alt="필터"
          onClick={handleFilterClick}
        />
      </SearchFilter>
      <Sort>
        <span
          style={{
            color: "var(--s-secondary-40, #52606F)",
            fontFamily: "Pretendard",
            fontSize: "12px",
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
      </Sort>

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
              fontSize: "20px",
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
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "140%",
              }}
            >
              필터 초기화
            </p>
            <img
              className="close-icon"
              src={close}
              alt="닫기"
              onClick={handleCloseModal}
            />
          </div>
        </FilterTop>
        <FilterContent>
          <Category>
            <p
              style={{
                color: " var(--n-neutral-10, #1A1C1E)",
                fontFamily: "Pretendard",
                fontSize: "15px",
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
                fontSize: "15px",
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
                fontSize: "15px",
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
                fontSize: "15px",
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
        }}
        level={3} // 지도의 확대 레벨
      >
        {locations.map((loc, idx) => (
          <MapMarker
            key={`${loc.title}-${loc.latlng}`}
            position={loc.latlng}
            image={{
              src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
              size: { width: 24, height: 35 },
            }}
            title={loc.title}
          />
        ))}
      </Map>
      <MainContent>
        <PlaceList />
      </MainContent>
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
  width: 321px;
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
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  img {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    margin-left: 7px;
    cursor: pointer;
  }
`;

const Sort = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  margin-top: 10px;
  gap: 18px;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--s-secondary-40, #52606f);
    font-family: Pretendard;
    font-size: 13.5px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  img {
    width: 12px;
    height: 12px;
    margin-left: 5px;
  }
`;

const MainContent = styled.div`
  height: 370px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 70px;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: auto;
  width: 360px;
  height: 100%;
  /* margin-left: 194px; */
  opacity: 0.5;
  background: var(--n-neutral-0, #000);
  z-index: 1;
`;

const FilterModal = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: absolute;
  top: 100px;
  left: auto;
  width: 360px;
  height: 100%;
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
  margin-left: 2px;
  margin-bottom: -40px;

  .filter-top-img {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .filter-init {
    display: flex;
    width: 12px;
    height: 12px;
    padding: 6px;
    justify-content: center;
    align-items: center;
  }

  .close-icon {
    display: flex;
    width: 18px;
    height: 18px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
  }
`;

const FilterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 0px 0px 3px;
  gap: 10px;
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
    font-size: 12px;
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
