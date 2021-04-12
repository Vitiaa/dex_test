import { createSlice } from "@reduxjs/toolkit";
import { InitialStateTeamsInterface, RootTeamStateInterface } from "./types";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { addTeam, getTeam, getTeams } from "./asyncAction";

const initialState: InitialStateTeamsInterface = {
  items: [],
  loading: false,
  error: null,
  count: 0,
  page: 0,
  size: 0,
};

export const teamSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: {
    [getTeams.fulfilled.type]: (state, { payload }) => {
      state.items = payload.data;

      state.loading = false;
      state.count = payload.count;
      state.page = payload.page;
      state.size = payload.size;
    },
    [addTeam.fulfilled.type]: (state, { payload }) => {},
    [getTeam.fulfilled.type]: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const useTeamSelector: TypedUseSelectorHook<RootTeamStateInterface> = useSelector;
