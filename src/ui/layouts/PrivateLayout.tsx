import React, { useEffect } from "react";
import { useAuthSelector } from "../../modules/auth/authSelector";
import { Redirect } from "react-router";
import { Header } from "../Header/Header";
import styled from "styled-components";
import { SideBar } from "../SideBar/SideBar";

export const PrivateLayout: React.FC = ({ children, ...rest }) => {
  const { isAuth, status } = useAuthSelector((state) => state.auth);

  useEffect(() => {
    console.log(status);
  }, [status]);

  return isAuth ? (
    status === "loaded" ? (
      <AppWrapper>
        <Header />
        <ContentWrapper>
          <SideBar />
          <main>{children}</main>
        </ContentWrapper>
      </AppWrapper>
    ) : (
      <div>...loading</div>
    )
  ) : (
    <Redirect to={"/"} />
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: 670px) {
    justify-content: center;
  }
`;

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f6f6f6;
  z-index: 1;
  main {
    display: flex;
    width: 1300px;
    //align-items: center;
    margin-top: 50px;
    margin-bottom: 30px;
    padding: 0px 50px;
    @media (max-width: 700px) {
      padding: 0px 5px;
    }
  }
`;
