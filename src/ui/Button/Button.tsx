import React from "react";
import styled from "styled-components";

const Button: React.FC<any> = (props: any) => {
  return <ButtonB type="submit">{props.name}</ButtonB>;
};

export default Button;

const ButtonB = styled.button`
  width: 100%;
  max-width: 366px;
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
`;
