import { createAsyncThunk } from "@reduxjs/toolkit";

import { TeamInterface } from "../../api/dto/TeamDto/types";
import { addImage } from "../image/imageThunk";
import axios from "axios";

export const getTeamsList = createAsyncThunk(
  "team/getTeamsList",
  async (_, dispatch) => {
    const { data } = await axios.get(
      `http://dev.trainee.dex-it.ru/api/Team/GetTeams`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    );

    return data;
  }
);
export const getTeams = createAsyncThunk<
  string,
  {
    pageNum: number | null;
    size: number | null;
    name: string | undefined | unknown;
  },
  any
>("team/getTeams", async ({ pageNum=1, size=6, name }, { dispatch }) => {
  const { data } = await axios.get(
    `http://dev.trainee.dex-it.ru/api/Team/GetTeams`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
      params: { Name: name, Page: pageNum, PageSize: size },
    }
  );

  return data;
});

export const getTeam = createAsyncThunk(
  "team/get",
  async (teamID: number, dispatch) => {
    const { data } = await axios.get(
      `http://dev.trainee.dex-it.ru/api/Team/Get?id=${teamID}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    );

    return data;
  }
);

export const addTeam = createAsyncThunk<string, TeamInterface, any>(
  "team/addTeam",
  async (params, { dispatch }) => {
    const { payload } = await dispatch(addImage(params.image));

    const { data } = await axios.post(
      `http://dev.trainee.dex-it.ru/api/Team/Add`,
      {
        name: params.name,
        foundationYear: Number(params.foundationYear),
        division: params.division,
        conference: params.conference,
        imageUrl: payload,
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
export const editTeam = createAsyncThunk<string, TeamInterface, any>(
  "team/editTeam",
  async (params, { dispatch }) => {
    let img;
    if (params.image.length !== 0) {
      const { payload } = await dispatch(addImage(params.image));
      img = payload;
    } else {
      img = params.imageUrl;
    }

    const { data } = await axios.put(
      `http://dev.trainee.dex-it.ru/api/Team/Update?id=${params.id}`,
      {
        name: params.name,
        foundationYear: Number(params.foundationYear),
        division: params.division,
        conference: params.conference,
        imageUrl: img,
        id: params.id,
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
export const deleteTeam = createAsyncThunk(
  "team/addTeam",
  async (itemID: number, dispatch) => {
    const { data } = await axios.delete(
      `http://dev.trainee.dex-it.ru/api/Team/Delete?id=${itemID}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    );

    return data;
  }
);
