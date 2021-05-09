import { createSlice } from "@reduxjs/toolkit";
import { RegistrationUser } from "./registerThunck";
import {InitialStateRegistrationInterface} from "../../api/dto/AuthDto/types";

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
    },
  },
});
