import { Redirect, Route } from "react-router-dom";
import React from "react";
import { useAuthSelector } from "../store/auth";

export const LoginRoute: React.FC<any> = ({ children, ...rest }) => {
  const { status, isAuth } = useAuthSelector((state) => state.auth);

  return isAuth && status === "loaded" ? (
    <Redirect to={"/TeamCatalog"} />
  ) : (
    children
  );
};
