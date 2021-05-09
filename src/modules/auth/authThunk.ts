import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../../api/requests/AuthApi";

export const login = createAsyncThunk<
  string,
  { login: string; password: string }
>("auth/setAuth", async (AuthParams) => {
  const authData = authAPI.auth(AuthParams);
  return authData;
});
