import React, { useState } from "react";
import styled from "styled-components";
import filterInit from "../assets/icons/filterInit.svg";
import close from "../assets/icons/close.svg";

const PlaceFilter = () => {
  return (
    <FilterModal>
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
  );
};

export default PlaceFilter;

const FilterModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  margin-top: 38px;
`;

const FilterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: -25px;
  margin-top: 5px;
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
