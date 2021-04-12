import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { routes } from "./constants/routes";

const App = () => {
  return (
    <AppWrapper>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #fff;
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-align: -webkit-center;
  a {
    text-decoration: none;
  }
`;
