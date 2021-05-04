import React, { useEffect } from "react";
import { useAuthSelector } from "../../modules/auth/authSelector";
import { Redirect } from "react-router";

export const PublicLayout: React.FC<any> = ({ children, ...rest }) => {
  const { isAuth, status } = useAuthSelector((state) => state.auth);

  useEffect(() => {
    console.log("PublicLayout => ", status);
  }, [status]);
  if (status === "loading") {
    return <div>...loading</div>;
  }
  return !isAuth ? <>{children}</> : <Redirect to={"/TeamCatalog"} />;
};
