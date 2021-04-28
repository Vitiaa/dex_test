import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import {
  addPlayer,
  editPlayer,
  getPlayers2,
  getTeamsPlayers,
} from "./asyncAction";
import {
  InitialStatePlayerInterface,
  PlayerInterface,
  RootPlayerStateInterface,
} from "./types";
import { AuthSlice } from "../auth";

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
    deletePlayerFromState: (state, action) => {
      console.log(state);
      console.log(action)
      // const { id } = action.payload;
      //
      // const items = state.items;
      // const index = items.findIndex((item: any) => id === item.id);
      // items.splice(index, 1);
    },
  },
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
export const {
  deletePlayerFromState: deletePlayerFromState,
} = PlayerSlice.actions;
export const usePlayerSelector: TypedUseSelectorHook<RootPlayerStateInterface> = useSelector;
