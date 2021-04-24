import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateTeamsInterface, RootTeamStateInterface } from "./types";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { addTeam, getTeam, getTeams, getTeams2, editTeam } from "./asyncAction";
import { baseInstance } from "../../api/constants";

const initialState: InitialStateTeamsInterface = {
  items: [],
  loading: false,
  error: null,
  count: 0,
  page: null,
  size: null,
  teamForPlayer: null,
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
    [getTeams2.fulfilled.type]: (state, { payload }) => {
      state.items = payload.data;
      state.loading = false;
      state.count = payload.count;
      state.page = payload.page;
      state.size = payload.size;
    },

    [addTeam.fulfilled.type]: (state, { payload }) => {},
    [editTeam.fulfilled.type]: (state, { payload }) => {},

    [getTeam.fulfilled.type]: (state, { payload }) => {
      state.teamForPlayer = payload;
    },
  },
});

export const useTeamSelector: TypedUseSelectorHook<RootTeamStateInterface> = useSelector;
