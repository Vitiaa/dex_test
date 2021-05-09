import { createAsyncThunk } from "@reduxjs/toolkit";

import { TeamInterface } from "../../api/dto/TeamDto/types";
import { addImage } from "../image/imageThunk";
import axios from "axios";
import { teamAPI } from "../../api/requests/TeamApi";
import { useAppDispatch } from "../../core/redux/store";

export const getTeamsList = createAsyncThunk("team/getTeamsList", async (_) => {
  const TeamList = teamAPI.getTeamList();
  return TeamList;
});
export const getTeams = createAsyncThunk<
  string,
  {
    pageNum: number | undefined;
    size: number | undefined;
    name: string | undefined;
  },
  any
>("team/getTeams", async ({ pageNum = 1, size = 6, name }) => {
  const getTeams = teamAPI.getTeams(pageNum, size, name);
  return getTeams;
});

export const getTeam = createAsyncThunk("team/get", async (teamID: number) => {
  const getTeam = teamAPI.getTeam(teamID);

  return getTeam;
});

export const addTeam = createAsyncThunk<string, TeamInterface, any>(
  "team/addTeam",
  async (params, { dispatch }) => {
    const { payload } = await dispatch(addImage(params.image));
    const addTeam = await teamAPI.addTeam(params, payload);
    return addTeam;
  }
);
export const editTeam = createAsyncThunk<string, TeamInterface>(
  "team/editTeam",
  async (params, { dispatch }) => {
    let img;
    if (params.image.length !== 0) {
      const { payload } = await dispatch(addImage(params.image));
      img = payload;
    } else {
      img = params.imageUrl;
    }

    const editTeam = await teamAPI.editTeam(params, img);
    return editTeam;
  }
);
export const deleteTeam = createAsyncThunk(
  "team/addTeam",
  async (itemID: number) => {
    const deleteTeam = teamAPI.deleteTeam(itemID);
    return deleteTeam;
  }
);
