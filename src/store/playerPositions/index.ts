import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import {
  InitialStatePlayerPositionsInterface,
  RootPlayerPositionsStateInterface,
} from "./types";
import { getPlayerPositions } from "./asyncActions";

const initialState: InitialStatePlayerPositionsInterface = {
  items: [],
  loading: false,
  error: null,
  position: "",
};

export const PlayerPositionsSlice = createSlice({
  name: "playerPositions",
  initialState,
  reducers: {},
  extraReducers: {
    [getPlayerPositions.fulfilled.type]: (state, { payload }) => {

      const options = payload.map((positions: any) => ({
        value: positions,
        label: positions,
      }));
      state.items = options;
      state.loading = false;
    },
  },
});

export const usePlayerPositionsSelector: TypedUseSelectorHook<RootPlayerPositionsStateInterface> = useSelector;
