import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { addPlayer, getPlayers, getTeamsPlayers } from "./asyncAction";
import {
  InitialStatePlayerInterface,
  PlayerInterface,
  RootPlayerStateInterface,
} from "./types";

const initialState: InitialStatePlayerInterface = {
  items: [],
  loading: false,
  error: null,
  count: 0,
  page: 0,
  size: 0,
};

export const PlayerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},
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
  },
});

export const usePlayerSelector: TypedUseSelectorHook<RootPlayerStateInterface> = useSelector;
