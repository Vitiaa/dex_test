import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { deviceMax } from "./Primitives";
import { Redirect } from "react-router";
import profile_svg from "../assets/Icons/profile_rounded.svg";
import { useAuthSelector } from "../store/auth";

export const Header: React.FC = (props) => {
  function logoutFunc() {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("token");
  }

  const userName = useAuthSelector((state) => state.auth.name);
  return (
    <header>
      <>
        <HeaderContainer>
          <button onClick={logoutFunc}>выход</button>
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

const Menu = styled.div`
position: absolute;
width: 200px;
height: 1400px;
margin: 500px;

margin: 0;
`
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
  padding: 18px 51px 18px;

  @media ${deviceMax.mobileL} {
    justify-content: center;
  }
`;

const LeftBlock = styled.div``;
const RightBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${deviceMax.mobileL} {
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
  }
`;
