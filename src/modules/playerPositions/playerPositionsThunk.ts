import { createAsyncThunk } from "@reduxjs/toolkit";
import { playerAPI } from "../../api/requests/PlayerApi";

export const getPlayerPositions = createAsyncThunk(
  "player/Positions",
  async (_) => {
    const getPlayerPositions = playerAPI.getPlayerPositions();

    return getPlayerPositions;
  }
);
