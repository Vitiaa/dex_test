import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseInstance } from "../../api/constants";
import { InitialStateTeamsInterface, TeamInterface } from "./types";
import { addImage } from "../image/asyncActions";

export const getTeams = createAsyncThunk(
  "team/getTeams",
  async (_, dispatch) => {
    const { data } = await baseInstance.get(`/Team/GetTeams`, {});

    return data;
  }
);
export const getTeams2 = createAsyncThunk<
  string,
  {
    pageNum: number | null;
    size: number | null;
    name: string | undefined | unknown;
  },
  any
>("team/getTeams", async ({ pageNum, size, name }, { dispatch }) => {
  const { data } = await baseInstance.get(`/Team/GetTeams`, {
    params: { Name: name, Page: pageNum, PageSize: size },
  });

  return data;
});

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
export const editTeam = createAsyncThunk<string, TeamInterface, any>(
  "team/editTeam",
  async (params, { dispatch }) => {
    const { payload } = await dispatch(addImage(params.image));

    const { data } = await baseInstance.put(`/Team/Update?id=${params.id}`, {
      name: params.name,
      foundationYear: Number(params.foundationYear),
      division: params.division,
      conference: params.conference,
      imageUrl: payload,
      id: params.id,
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
