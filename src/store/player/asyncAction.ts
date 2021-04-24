import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseInstance } from "../../api/constants";
import { PlayerInterface } from "./types";
import { addImage } from "../image/asyncActions";

export const getPlayers = createAsyncThunk(
  "player/getPlayers",
  async (_, dispatch) => {
    const { data } = await baseInstance.get(`/Player/GetPlayers`, {});
    console.log(data);
    return data;
  }
);

export const getPlayers2 = createAsyncThunk<
  string,
  { pageNum: number; size: number; name: string | null | unknown },
  any
>(
  "player/getPlayers",
  async ({ pageNum = 1, size = 6, name }, { dispatch }) => {
    const { data } = await baseInstance.get(`/Player/GetPlayers`, {
      params: { Name: name, Page: pageNum, PageSize: size, TeamIds: [] },
    });

    return data;
  }
);
export const getTeamsPlayers = createAsyncThunk(
  "player/getTeamsPlayers",
  async (teamID: number, dispatch) => {
    console.log(teamID);
    const { data } = await baseInstance.get(
      `/Player/GetPlayers?TeamIds=${teamID}`,
      {}
    );
    console.log(data);
    return data;
  }
);

export const addPlayer = createAsyncThunk<string, PlayerInterface, any>(
  "player/addPlayer",
  async (params, { dispatch }) => {
    const { payload } = await dispatch(addImage(params.image));
    const { data } = await baseInstance.post(`/Player/Add`, {
      number: params.number,
      name: params.name,
      position: params.position,
      team: params.team,
      birthday: params.birthday,
      height: params.height,
      weight: params.weight,
      avatarUrl: payload,
    });
    return data;
  }
);
export const editPlayer = createAsyncThunk<string, PlayerInterface, any>(
  "player/editPlayer",
  async (params, { dispatch }) => {
    const { payload } = await dispatch(addImage(params.image));
    const { data } = await baseInstance.put(`/Player/Update`, {
      number: params.number,
      name: params.name,
      position: params.position,
      team: params.team,
      birthday: params.birthday,
      height: params.height,
      weight: params.weight,
      id: params.id,
      avatarUrl: payload,
    });
    return data;
  }
);
export const deletePlayer = createAsyncThunk(
  "team/deletePlayer",
  async (itemID: number, dispatch) => {
    const { data } = await baseInstance.delete(
      `/Player/Delete?id=${itemID}`,
      {}
    );

    return data;
  }
);
