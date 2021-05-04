import { createSlice } from "@reduxjs/toolkit";
import { InitialStateAuthInterface } from "./types";
import { login } from "./authThunk";
import { baseInstance } from "../../api/constants";

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
      state.error = false;
    },
    [login.rejected.type]: (state, action) => {
      state.error = true;
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
