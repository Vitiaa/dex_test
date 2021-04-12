import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseInstance } from "../../api/constants";

export const getPlayerPositions = createAsyncThunk(
  "player/Positions",
  async (_, dispatch) => {
    const { data } = await baseInstance.get(`/Player/GetPositions`, {});

    return data;
  }
);
