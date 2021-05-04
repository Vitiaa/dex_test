import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import profile_svg from "../../assets/Icons/profile_rounded.svg";
import {  useAuthSelector } from "../../modules/auth/authSelector";

import { useAppDispatch } from "../../core/redux/store";


export const Header: React.FC = (props) => {
  const dispatch = useAppDispatch();


  const userName = useAuthSelector((state) => state.auth.name);
  return (
    <header>
      <>
        <HeaderContainer>
          <LeftBlock>
            <img src={logo} alt="" />
          </LeftBlock>
          <RightBlock>
            <p>{userName}</p>
            <img src={profile_svg} alt="" />
          </RightBlock>
        </HeaderContainer>
      </>
    </header>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  z-index: 2;
  height: 80px;

  width: 100%;
  justify-content: space-between;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
  img {
    margin-left: 50px;
  }

  @media (max-width: 670px) {
    justify-content: center;
    padding: 0px;
    img {
      margin: 0;
    }
  }
`;

const LeftBlock = styled.div`
  align-self: center;
`;
const RightBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 670px) {
    display: none;
  }
  p {
    line-height: 24px;
    font-size: 14px;
    color: #303030;
    margin-right: 20px;
    width: 71px;
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 54px;
  }
`;
