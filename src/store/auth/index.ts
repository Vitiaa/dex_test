import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitialStateAuthInterface, RootAuthStateInterface } from "./types";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import axios from "axios";
import { baseInstance } from "../../api/constants";

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
  status: localStorage.authStatus || "pending",
  error: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      console.log(state);
      delete localStorage.isAuth;
      delete localStorage.authStatus;
      delete localStorage.token;
      delete localStorage.name;
      state.isAuth = false;
      state.status = "pending";
      state.token = "";
      state.name = "";
    },
  },
  extraReducers: {
    [login.pending.type]: (state, action) => {
      // state.status = "loading";
      state.error =  false;
    },
    [login.rejected.type]: (state, action) => {

        state.error =true;



    },
    [login.fulfilled.type]: (state, { payload }) => {
      console.log(payload);
      localStorage.isAuth = true;
      localStorage.token = payload.token;
      localStorage.name = payload.name;
      localStorage.authStatus = "loaded";

      state.isAuth = true;
      state.token = payload.token;
      state.name = payload.name;
      state.status = "loaded";
      state.error = false;
          baseInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${payload.token}`;
    },
  },
});

export const { logout: logout } = AuthSlice.actions;
export const useAuthSelector: TypedUseSelectorHook<RootAuthStateInterface> = useSelector;
