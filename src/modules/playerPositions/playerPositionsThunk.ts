import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseInstance } from "../../api/constants";

export const getPlayerPositions = createAsyncThunk(
  "player/Positions",
  async (_, dispatch) => {
    const { data } = await baseInstance.get(
      `http://dev.trainee.dex-it.ru/api/Player/GetPositions`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    );

    return data;
  }
);
