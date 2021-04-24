import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthSelector } from "../store/auth";

export const PrivateRoute: React.FC = ({ children, ...rest }) => {
  const {status,isAuth} = useAuthSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={() => (isAuth && status=== "loaded" ? children : <Redirect to={"/login"} />)}
    />
  );
};
