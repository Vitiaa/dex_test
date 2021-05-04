import { createSlice } from "@reduxjs/toolkit";
import { InitialStateImageInterface, RootImageStateInterface } from "./types";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { addImage } from "./imageThunk";

const initialState: InitialStateImageInterface = {
  imageUrl: "",
  loading: false,
  error: null,
};

export const imgSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: {
    [addImage.fulfilled.type]: (state, { payload }) => {
      state.imageUrl = payload;

      state.loading = false;
    },
  },
});
