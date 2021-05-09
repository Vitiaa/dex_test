import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../../api/requests/AuthApi";
import { RegistrationInterface } from "../../api/dto/AuthDto/types";

export const RegistrationUser = createAsyncThunk<
  RegistrationInterface,
  RegistrationInterface
>("RegistrationUser", async ({ userName, login, password }, dispatch) => {
  const authData = authAPI.registration({ userName, login, password });
  return authData;
});
