import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitialStateAuthInterface, RootAuthStateInterface } from "./types";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import axios from "axios";

export const login = createAsyncThunk<
  string,
  { login: string; password: string }
>("auth/setAuth", async ({ login, password }, dispatch) => {
  const { data } = await axios.post(
    `http://dev.trainee.dex-it.ru/api/Auth/SignIn`,
    {
      login,
      password,
    }
  );

  return data;
});

const initialState: InitialStateAuthInterface = {
  isAuth: localStorage.isAuth || false,
  token: localStorage.token || "",
  name: localStorage.name || "",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      localStorage.isAuth = false;
      state.isAuth = false;
    },
  },
  extraReducers: {
    [login.fulfilled.type]: (state, { payload }) => {
      state.isAuth = true;
      state.token = payload.token;
      state.name = payload.name;
      localStorage.isAuth = true;
      localStorage.token = payload.token;
      localStorage.name = payload.name;
    },
    [login.rejected.type]: (state, action) => {
      return action;
    },
  },
});

export const useAuthSelector: TypedUseSelectorHook<RootAuthStateInterface> = useSelector;
export const { logout } = AuthSlice.actions;
