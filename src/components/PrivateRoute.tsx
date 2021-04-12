import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthSelector } from "../store/auth";

export const PrivateRoute: React.FC = ({ children, ...rest }) => {
  const isAuth = useAuthSelector((state) => state.auth.isAuth);

  return (
    <Route
      {...rest}
      render={() => (isAuth ? children : <Redirect to={"/login"} />)}
    />
  );
};
