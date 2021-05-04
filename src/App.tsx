import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { routers } from "./pages/routers";

const App = () => {
  return (
    <AppWrapper>
      <Switch>
        {routers.map((route, index) => (
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
  //max-height: 1072px;
  background: #fff;
  font-style: normal;
  font-family: AvenirMedium, sans-serif;
  font-weight: 500;
  font-size: 15px;
  text-align: -webkit-center;
  a {
    text-decoration: none;
  }
`;
