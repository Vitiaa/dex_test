import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import close_eye from "../../../assets/Icons/close_eye_rounded.svg";
import eye from "../../../assets/Icons/eye.svg";

export const Input: React.FC<any> = forwardRef((props, ref) => {
  const [inputType, setInputType] = useState("password");

  return (
    <InputWr>
      <label>{props.name}</label>
      <InputWithIcom>
        <input
          ref={ref}
          {...props}
          type={
            props.name === "password" || props.name === "confirmPassword"
              ? inputType
              : props.name === "birthday"
              ? "date"
              : "text"
          }
        />
        {(props.name === "password" || props.name === "confirmPassword") &&
        inputType == "password" ? (
          <img src={close_eye} alt="" onClick={() => setInputType("text")} />
        ) : null}
        {(props.name === "password" || props.name === "confirmPassword") &&
        inputType == "text" ? (
          <img src={eye} alt="" onClick={() => setInputType("password")} />
        ) : null}
      </InputWithIcom>
    </InputWr>
  );
});

const InputWr = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  label {
    font-size: 14px;
    color: #707070;
    margin-bottom: 8px;
    text-align: start;
  }

  span {
    font-size: 12px;
    color: #ff768e;
  }
`;
const InputWithIcom = styled.div`
  background: #f6f6f6;
  border-radius: 4px;
  display: flex;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 5px #d9d9d9;

  :hover {
    background: #d1d1d1;
  }
  :focus {
    box-shadow: 0px 0px 5px #d9d9d9;
  }

  input {
    text-align: start;
    min-width: 327px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    outline: none;
    background: #f6f6f6;
    border: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    padding: 8px 12px 8px 8px;
    :hover {
      background: #d1d1d1;
    }
    //:focus  {
    //  box-shadow: 0px 0px 5px #d9d9d9;
    //}
    :hover ~ img {
      background: #d1d1d1;
    }
    :focus + InputWithIcom {
      box-shadow: 0px 0px 5px #d9d9d9;
    }
  }
  img {
    padding: 8px 12px 8px 8px;
  }
`;
