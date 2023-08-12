import React, { useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

import search from "../assets/icons/search.svg";
import delBtn from "../assets/icons/deleteSecondary.svg";

const SearchBar = () => {
  const [text, setText] = useState("");

  const BASE_URL = "https://yewon1209.pythonanywhere.com";

  const onChange = (e) => {
    setText(e.target.value);
  };

  const deleteText = () => {
    setText("");
  };

  //검색 결과 담을 리스트
  const [searchResult, setSearchResult] = useState([]);

  //검색 진행하고 결과 받아오는 함수
  const goSearch = async (e, text) => {
    e.preventDefault();
    await axios
      .get(`${BASE_URL}/main/search/?q=${text}`)
      .then((response) => {
        setSearchResult([...response.data]);
        console.log(searchResult);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Wrapper>
      <form className="input-container" onSubmit={goSearch}>
        <InputContainer>
          <Input
            type="text"
            placeholder="제목이나 작가를 검색해보세요!"
            onChange={onChange}
            value={text}
          />
          {text && (
            <DeleteBtn onClick={deleteText}>
              <img src={delBtn} alt="검색어 삭제 버튼" />
            </DeleteBtn>
          )}
        </InputContainer>
        <SubmitButton>
          <img src={search} alt="검색 버튼" />
        </SubmitButton>
      </form>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
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
`;

const Input = styled.input`
  width: 242px;
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

const SubmitButton = styled.button`
  position: absolute;
  top: 12px;
  right: 20px;
  padding: 0;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;
