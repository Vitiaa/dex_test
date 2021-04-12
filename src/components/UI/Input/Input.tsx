import React, { forwardRef, InputHTMLAttributes } from "react";
import styled from "styled-components";

const Input: React.FC<any> = forwardRef((props, ref) => {
  return (
    <InputWr>
      <label>{props.name}</label>

      <input ref={ref} {...props} />

      {/*{!props.required ? <span>ошибка</span> : null}*/}
    </InputWr>
  );
});

export default Input;
const InputWr = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  label {
    font-size: 14px;
    color: #707070;
    margin-bottom: 8px;
  }
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

  span {
    font-size: 12px;
    color: #ff768e;
  }
`;
