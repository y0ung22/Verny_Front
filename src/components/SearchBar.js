import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import search from "../assets/icons/search.svg";
import dropdownClosed from "../assets/icons/dropdownClosed.svg";
import dropdownOpened from "../assets/icons/dropdownOpened.svg";

const SearchBar = () => {
  const [dropdownSrc, setDropdownSrc] = useState("");
  const [dropdown, setDropdown] = useState(false);
  //검색 결과 담을 리스트
  const [searchResult, setSearchResult] = useState([]);

  const dropClick = () => {
    dropdown
      ? setDropdownSrc(dropdownClosed) && setDropdown(false)
      : setDropdownSrc(dropdownOpened) && setDropdown(true);
  };

  return (
    <Wrapper>
      <Search>
        <form className="input-container" onSubmit={goSearch}>
          <Input type="text" placeholder="제목이나 작가를 검색해보세요!" />
          <SubmitButton>
            <img src={search} />
          </SubmitButton>
        </form>
      </Search>
      <Dropdown>
        <p id="txt">
          앞선 시대를 살아간 작가들의 작품
          <br />
          12건을 감상해보세요!
        </p>
        <DropBox onClick={dropClick}>
          <span>정렬</span>
          <img src={dropdownSrc} />
        </DropBox>
      </Dropdown>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

const Search = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const Input = styled.input`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;

  color: var(--s-secondary-10, #0e1d2a);
  font-family: Pretendard;
  font-size: 0.88rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const SubmitButton = styled.button`
  width: 48px;
  height: 48px;
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

const Dropdown = styled.div`
  display: flex;
  min-height: 56px;
  padding: 4px 16px 4px 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: var(--n-neutral-100, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 51, 84, 0.04);
  p {
    max-width: 194px;
    flex: 1 0 0;
    color: var(--s-secondary-40, #52606f);
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

const DropBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--n-neutral-10, #1a1c1e);
  font-family: Pretendard;
  font-size: 0.88rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  img {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }
`;
