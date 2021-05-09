import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PlayerInterface } from "../../api/dto/PlayerDto/types";
import { addImage } from "../image/imageThunk";

// export const getPlayers = createAsyncThunk(
//   "player/getPlayers",
//   async (_, dispatch) => {
//     const { data } = await axios.get(
//       `http://dev.trainee.dex-it.ru/api/Player/GetPlayers`,
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.token}`,
//         },
//       }
//     );
//     console.log(data);
//     return data;
//   }
// );

export const getPlayers = createAsyncThunk<
  string,
  { pageNum: number; size: number; name: string | null | unknown; TeamIds: [] },
  any
>(
  "player/getPlayers",
  async ({ pageNum = 1, size = 6, name, TeamIds }, { dispatch }) => {
    const { data } = await axios.get(
      `http://dev.trainee.dex-it.ru/api/Player/GetPlayers?${TeamIds.map(
        (teamId: number, index: number) => `TeamIds[${index}]=${teamId}`
      ).join("&")}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
        params: { Name: name, Page: pageNum, PageSize: size },
      }
    );

    return data;
  }
);
export const getTeamsPlayers = createAsyncThunk(
  "player/getTeamsPlayers",
  async (teamID: number, dispatch) => {
    const { data } = await axios.get(
      `http://dev.trainee.dex-it.ru/api/Player/GetPlayers?TeamIds=${teamID}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    );

    return data;
  }
);

export const addPlayer = createAsyncThunk<string, PlayerInterface, any>(
  "player/addPlayer",
  async (params, { dispatch }) => {
    const { payload } = await dispatch(addImage(params.image));
    const { data } = await axios.post(
      `http://dev.trainee.dex-it.ru/api/Player/Add`,
      {
        number: params.number,
        name: params.name,
        position: params.position,
        team: params.team,
        birthday: params.birthday,
        height: params.height,
        weight: params.weight,
        avatarUrl: payload,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    );
    return data;
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
    const { data } = await axios.put(
      `http://dev.trainee.dex-it.ru/api/Player/Update`,
      {
        number: params.number,
        name: params.name,
        position: params.position,
        team: params.team,
        birthday: params.birthday,
        height: params.height,
        weight: params.weight,
        id: params.id,
        avatarUrl: img,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    );
    return data;
  }
);
export const deletePlayer = createAsyncThunk(
  "team/deletePlayer",
  async (itemID: number, dispatch) => {
    const { data } = await axios.delete(
      `http://dev.trainee.dex-it.ru/api/Player/Delete?id=${itemID}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    );

    return data;
  }
);
