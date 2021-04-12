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
