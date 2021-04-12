import React from "react";
import styled from "styled-components";
import { deviceMax } from "../../Primitives";

const AddButton = () => {
  return <ButtonAdd>Add +</ButtonAdd>;
};

export default AddButton;

const ButtonAdd = styled.button`
  width: 100%;
  max-width: 104px;
  max-height: 40px;
  background: #e4163a;
  border-radius: 4px;
  color: #ffffff;
  align-items: center;
  text-align: center;
  font-size: 15px;
  padding: 8px 0px;
  line-height: 24px;
  border: none;
  :hover {
    background: #ff5761;
  }
  :focus {
    background: #c60e2e;
    outline: none;
  }
  :disabled {
    background: #f6f6f6;
    color: #d1d1d1;
  }

  @media ${deviceMax.mobileXL} {
    max-width: 425px;
    width: 100%;
  }
`;
