import React from "react";
import styled from "styled-components";

const SearchInput = () => {
  return (
    <InputWr>
      <input type="text" />
    </InputWr>
  );
};

export default SearchInput;

const InputWr = styled.div`
  display: flex;
  input {
    min-width: 327px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    outline: none;
    background: #f6f6f6;
    border-radius: 4px;
    margin-bottom: 6px;
    border: none;
    font-weight: 500;
    font-size: 14px;
    padding: 8px 12px 8px 8px;
    line-height: 24px;
    :hover {
      background: #d1d1d1;
    }
    :focus {
      box-shadow: 0px 0px 5px #d9d9d9;
    }
  }
`;
