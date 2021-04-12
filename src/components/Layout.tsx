import { Header } from "./Header";
import React from "react";
import { PrivateRoute } from "./PrivateRoute";

export const AdminLayout: React.FC<{ hasHeader: boolean }> = ({
  children,
  hasHeader,
}) => {
  return (
    <PrivateRoute>
      {hasHeader && <Header />}
      <main>{children}</main>
    </PrivateRoute>
  );
};
