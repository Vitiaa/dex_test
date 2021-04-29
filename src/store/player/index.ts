import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import {
  addPlayer,
  editPlayer,
  getPlayers,
  getTeamsPlayers,
} from "./asyncAction";
import { InitialStatePlayerInterface, RootPlayerStateInterface } from "./types";

const initialState: InitialStatePlayerInterface = {
  items: [],
  loading: false,
  error: null,
  count: 0,
  page: 1,
  size: 6,
};

export const PlayerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    deletePlayerFromState: (state, { payload }) => {
      state.items = state.items.filter((item: any) => payload !== item.id);
    },
  },
  extraReducers: {
    [getPlayers.fulfilled.type]: (state, { payload }) => {
      state.items = payload?.data;
      state.loading = false;
      state.count = payload.count;
      state.page = payload.page;
      state.size = payload.size;
    },
    [getTeamsPlayers.fulfilled.type]: (state, { payload }) => {
      state.items = payload?.data;
      state.loading = false;
      state.count = payload.count;
      state.page = payload.page;
      state.size = payload.size;
    },
    [addPlayer.fulfilled.type]: (state, { payload }) => {},
    [editPlayer.fulfilled.type]: (state, { payload }) => {},
  },
});
export const {
  deletePlayerFromState: deletePlayerFromState,
} = PlayerSlice.actions;
export const usePlayerSelector: TypedUseSelectorHook<RootPlayerStateInterface> = useSelector;
