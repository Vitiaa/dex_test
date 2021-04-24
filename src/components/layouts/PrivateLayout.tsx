import React, { useEffect } from "react";
import { useAuthSelector } from "../../store/auth";
import { Redirect } from "react-router";

export const PrivateLayout: React.FC = ({ children, ...rest }) => {
  const { isAuth, status } = useAuthSelector((state) => state.auth);

  useEffect(() => {
    console.log(status);
  }, [status]);

  return isAuth ? (
    status === "loaded" ? (
      <>{children}</>
    ) : (
      <div>...loading</div>
    )
  ) : (
    <Redirect to={"/"} />
  );
};
