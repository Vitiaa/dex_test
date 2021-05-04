import React from "react";
import styled from "styled-components";
import { deviceMax } from "../../Primitives";

const AddButton = () => {
  return (
    <ButtonAddWrapper>
      <Wrapp>
        <ButtonAdd>Add +</ButtonAdd>
      </Wrapp>
    </ButtonAddWrapper>
  );
};

export default AddButton;
const ButtonAddWrapper = styled.div`
  //@media (max-width: 670px) {
  //  display: flex;
  //  min-width: 327px;
  //}
  //@media (max-width: 700px) {
  //  max-width: 450px;
  //  width: 100%;
  //}
  display: flex;
  justify-content: flex-end;
`;
const ButtonAdd = styled.button`
  width: 100%;
 
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

  @media (max-width: 1026px) {
    min-width: 327px;

    width: 100%;
  }
`;
const Wrapp = styled.div`

   max-width: 104px;
  max-height: 40px;
  width: 100%;
  height: 40px;
    @media (max-width: 1026px) {
    min-width: 327px;
   max-width: none;
  max-height: none;
    width: 100%;
  }
`;
