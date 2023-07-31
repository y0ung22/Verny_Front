import React, { useState } from "react";
import { styled } from "styled-components";

import dropdownClosed from "../assets/icons/dropdownClosed.svg";
import dropdownOpened from "../assets/icons/dropdownOpened.svg";

const Dropdown = () => {
  const [dropdownSrc, setDropdownSrc] = useState(dropdownClosed);
  const [dropdown, setDropdown] = useState(false);

  const [btnActive, setBtnActive] = useState("정렬");

  const toggleActive = (e) => {
    setBtnActive(e.target.value);
  };

  const dropClick = () => {
    setDropdown(!dropdown);
    setDropdownSrc(dropdown ? dropdownClosed : dropdownOpened);
  };

  return (
    <Wrapper>
      <p id="txt">작품 12개를 감상해보세요!</p>
      <Dropdown>
        <DropBtn onClick={dropClick}>
          <span>정렬</span>
          <img src={dropdownSrc} />
        </DropBtn>
        {{ dropdown } && (
          <DropBox>
            <Btn
              id="latest"
              onClick={toggleActive("최신순")}
              value="최신순"
              active={btnActive === "최신순"}
            >
              최신순
            </Btn>
            <Btn
              id="comment"
              onClick={toggleActive("댓글순")}
              value="댓글순"
              active={btnActive === "댓글순"}
            >
              댓글순
            </Btn>
            <Btn
              id="bookmark"
              onClick={toggleActive("즐겨찾기순")}
              value="즐겨찾기순"
              active={btnActive === "즐겨찾기순"}
            >
              즐겨찾기순
            </Btn>
          </DropBox>
        )}
      </Dropdown>
    </Wrapper>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  min-height: 44px;
  padding: 0px 16px 0px 24px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
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

const DropBtn = styled.div`
  display: flex;
  width: 115px;
  height: 44px;
  min-height: 44px;
  padding: 12px 8px 12px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background: var(--n-neutral-100, #fff);
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

const DropBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  background: var(--n-neutral-100, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 51, 84, 0.04);
`;

const Btn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  width: 115px;
  height: 44px;
  min-height: 44px;
  padding: 12px 16px;
  align-items: center;
  margin: 0;
  color: var(--n-neutral-10, #1a1c1e);
  font-family: Pretendard;
  font-size: 0.88rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  :focus {
    background: var(--n-neutral-95, #f1f0f4);
  }
  :hover {
    background: var(--s-secondary-95, #e8f1ff);
  }
  :active {
    color: var(--p-primary-40, #00639c);
  }
  #latest {
    border-radius: 12px 12px 0px 0px;
  }
  #bookmark {
    border-radius: 0px 0px 12px 12px;
  }
`;
