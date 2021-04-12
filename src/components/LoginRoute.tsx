import { Redirect, Route } from "react-router-dom";
import React from "react";
import { useAuthSelector } from "../store/auth";

export const LoginRoute: React.FC<any> = ({ children, ...rest }) => {
  const isAuth = useAuthSelector((state) => state.auth.isAuth);

  return (
    <Route
      {...rest}
      render={() => (isAuth ? <Redirect to={"/TeamCatalog"} /> : children)}
    />
  );
};
