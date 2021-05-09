import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PlayerInterface } from "../../api/dto/PlayerDto/types";
import { addImage } from "../image/imageThunk";
import { playerAPI } from "../../api/requests/PlayerApi";

export const getPlayers = createAsyncThunk<
  string,
  { pageNum: number; size: number; name: string; TeamIds: [] },
  any
>(
  "player/getPlayers",
  async ({ pageNum = 1, size = 6, name = "", TeamIds }) => {
    const getPlayers = await playerAPI.getPlayers(pageNum, size, name, TeamIds);
    return getPlayers;
  }
);
export const getTeamsPlayers = createAsyncThunk(
  "player/getTeamsPlayers",
  async (teamID: number) => {
    const getTeamsPlayers = playerAPI.getTeamsPlayers(teamID);
  }
);

export const addPlayer = createAsyncThunk<string, PlayerInterface, any>(
  "player/addPlayer",
  async (params, { dispatch }) => {
    const { payload } = await dispatch(addImage(params.image));
    const addPlayer = await playerAPI.addPlayer(params, payload);
    return addPlayer;
  }
);
export const editPlayer = createAsyncThunk<string, PlayerInterface, any>(
  "player/editPlayer",
  async (params, { dispatch }) => {
    let img;
    if (params.image.length !== 0) {
      const { payload } = await dispatch(addImage(params.image));
      img = payload;
    } else {
      img = params.avatarUrl;
    }
    const editPlayer = await playerAPI.editPlayer(params, img);
    return editPlayer;
  }
);
export const deletePlayer = createAsyncThunk(
  "team/deletePlayer",
  async (itemID: number) => {
    const deletePlayer = await playerAPI.deletePlayer(itemID);

    return deletePlayer;
  }
);
