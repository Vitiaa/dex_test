import { createSlice } from "@reduxjs/toolkit";
import { InitialStateRegistrationInterface } from "./types";

import { RegistrationUser } from "./registerThunck";

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
