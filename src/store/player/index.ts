import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import {addPlayer, editPlayer, getPlayers, getPlayers2, getTeamsPlayers} from "./asyncAction";
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
  page: 1,
  size: 6,
};

export const PlayerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},
  extraReducers: {
    [getPlayers2.fulfilled.type]: (state, { payload }) => {
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

export const usePlayerSelector: TypedUseSelectorHook<RootPlayerStateInterface> = useSelector;
