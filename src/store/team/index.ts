import { createSlice } from "@reduxjs/toolkit";
import { InitialStateTeamsInterface, RootTeamStateInterface } from "./types";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import {addTeam, getTeam, getTeams, editTeam, getTeamsList} from "./asyncAction";
import {PlayerSlice} from "../player";

const initialState: InitialStateTeamsInterface = {
  items: [],
  teamsList: [],
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
  reducers: { deleteTeamFromState: (state, { payload }) => {
      state.items = state.items.filter((item: any) => payload !== item.id);
    },},
  extraReducers: {
    [getTeams.fulfilled.type]: (state, { payload }) => {
      state.items = payload.data;
      state.loading = false;
      state.count = payload.count;
      state.page = payload.page;
      state.size = payload.size;
    },
    [getTeamsList.fulfilled.type]: (state, { payload }) => {
      state.teamsList = payload.data;

    },

    [addTeam.fulfilled.type]: (state, { payload }) => {},
    [editTeam.fulfilled.type]: (state, { payload }) => {},

    [getTeam.fulfilled.type]: (state, { payload }) => {
      state.teamForPlayer = payload;
    },
  },
});
export const {deleteTeamFromState: deleteTeamFromState,
} = teamSlice.actions;
export const useTeamSelector: TypedUseSelectorHook<RootTeamStateInterface> = useSelector;
