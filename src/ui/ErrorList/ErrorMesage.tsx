import React from "react";
import styled from "styled-components";

export const ErrorWindow: React.FC<any> = () => {
  return (
    <ErrorWindowWrapper>
      User with the specified username / password was not found.
    </ErrorWindowWrapper>
  );
};
export const ErrorMessage: React.FC<any> = (props) => {
  return <ErrorMessageWrapper>{props.errorMessage}</ErrorMessageWrapper>;
};

const ErrorWindowWrapper = styled.div`
  font-size: 16px;
  line-height: 24px;
  width: 470px;
  margin-top: 36px;
  margin-left: auto;
  margin-right: 35px;
  height: 40px;
  background: #ff5761;
  color: #ffffff;
  border-radius: 4px;
  padding: 8px 16px;
`;
const ErrorMessageWrapper = styled.p`
  font-size: 12px;
  color: #ff768e;
  margin-bottom: 24px;
  margin-right: auto;
`;
