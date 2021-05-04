import { createSlice } from "@reduxjs/toolkit";

import {
  InitialStatePlayerPositionsInterface,
  RootPlayerPositionsStateInterface,
} from "./types";
import { getPlayerPositions } from "./playerPositionsThunk";

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
