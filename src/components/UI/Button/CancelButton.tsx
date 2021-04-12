import React from "react";
import styled from "styled-components";

const CancelButton = () => {
  return <ButtonC>Cancel</ButtonC>;
};

export default CancelButton;

const ButtonC = styled.button`
  width: 100%;
  max-width: 171px;
  background: #fff;
  border-radius: 4px;
  color: #9c9c9c;
  align-items: center;
  text-align: center;
  font-size: 15px;
  padding: 8px 0px;
  line-height: 24px;
  border: 1px solid #9c9c9c;
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 20px;
  :hover {
    background: #d1d1d1;
    color: #9c9c9c;
  }
  :focus {
    background: #9c9c9c;
    outline: none;
    color: #707070;
  }
  :disabled {
    background: #f6f6f6;
    color: #d1d1d1;
    color: #d1d1d1;
  }
`;
