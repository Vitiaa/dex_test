import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  InitialStateRegistrationInterface,
  RootRegistrationStateInterface,
} from "./types";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import axios from "axios";

export const RegistrationUser = createAsyncThunk<
  string,
  { userName: string; login: string; password: string }
>("RegistrationUser", async ({ userName, login, password }, dispatch) => {
  return await axios.post(`http://dev.trainee.dex-it.ru/api/Auth/SignUp`, {
    userName,
    login,
    password,
  });
});

const initialState: InitialStateRegistrationInterface = {
  user: [],
  loading: false,
  error: null,
};

export const RegistrationSlice = createSlice({
  name: "RegistrationUser",
  initialState,
  reducers: {},
  extraReducers: {
    [RegistrationUser.fulfilled.type]: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    },
  },
});

export const useRegistrationSelector: TypedUseSelectorHook<RootRegistrationStateInterface> = useSelector;
