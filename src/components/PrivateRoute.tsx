import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthSelector } from "../store/auth";

export const PrivateRoute: React.FC<any> = ({ children }) => {
  const { status, isAuth } = useAuthSelector((state) => state.auth);

  return isAuth ? children : <Redirect to={"/login"} />;
};
