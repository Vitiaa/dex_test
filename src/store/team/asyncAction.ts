import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseInstance } from "../../api/constants";
import { TeamInterface } from "./types";
import { addImage } from "../image/asyncActions";

export const getTeams = createAsyncThunk(
  "team/getTeams",
  async (_, dispatch) => {
    const { data } = await baseInstance.get(`/Team/GetTeams`, {});

    return data;
  }
);
export const getTeam = createAsyncThunk(
  "team/get",
  async (teamID: number, dispatch) => {
    const { data } = await baseInstance.get(`/Team/Get?id=${teamID}`, {});

    return data;
  }
);

export const addTeam = createAsyncThunk<string, TeamInterface, any>(
  "team/addTeam",
  async (params, { dispatch }) => {
    const { payload } = await dispatch(addImage(params.image));

    const { data } = await baseInstance.post(`/Team/Add`, {
      name: params.name,
      foundationYear: Number(params.foundationYear),
      division: params.division,
      conference: params.conference,
      imageUrl: payload,
    });
    return data;
  }
);
export const deleteTeam = createAsyncThunk(
  "team/addTeam",
  async (itemID: number, dispatch) => {
    const { data } = await baseInstance.delete(`/Team/Delete?id=${itemID}`, {});

    return data;
  }
);
