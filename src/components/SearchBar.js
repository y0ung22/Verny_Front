import React, { useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

import search from "../assets/icons/search.svg";
import delBtn from "../assets/icons/deleteSecondary.svg";

const SearchBar = () => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const deleteText = () => {
    setText("");
  };

  //검색 결과 담을 리스트
  //const [searchResult, setSearchResult] = useState([]);

  //검색 진행하고 결과 받아오는 함수
  const goSearch = () => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className="input-container" onSubmit={goSearch}>
        <Input
          type="text"
          placeholder="제목이나 작가를 검색해보세요!"
          onChange={onChange}
        />
        {{ setText } && (
          <DeleteBtn onClick={deleteText}>
            <img src={delBtn} />
          </DeleteBtn>
        )}
        <SubmitButton>
          <img src={search} />
        </SubmitButton>
      </form>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 16px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  background: var(--n-neutral-100, #fff);
`;

const Input = styled.input`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 12px;
  border: 1.5px solid var(--s-secondary-80, #b9c8da);
  background: var(--s-secondary-99, #fcfcff);

  color: var(--s-secondary-10, #0e1d2a);
  font-family: Pretendard;
  font-size: 0.88rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const DeleteBtn = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: absolute;
  right: 64px;
  img {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }
`;

const SubmitButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  background-color: transparent;
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;
