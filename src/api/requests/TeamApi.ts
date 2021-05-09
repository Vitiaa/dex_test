import axios from "axios";
import { TeamInterface } from "../dto/TeamDto/types";

const getTeamList = async () => {
  const { data } = await axios.get(
    `http://dev.trainee.dex-it.ru/api/Team/GetTeams`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }
  );

  return data;
};

const getTeams = async (pageNum = 1, size = 6, name = "") => {
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
};
const getTeam = async (teamID: number) => {
  const { data } = await axios.get(
    `http://dev.trainee.dex-it.ru/api/Team/Get?id=${teamID}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }
  );

  return data;
};

const addTeam = async (params: TeamInterface, payload: unknown) => {
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
};
const editTeam = async (params: TeamInterface, img: unknown) => {
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
};
const deleteTeam = async (itemID: number) => {
  const { data } = await axios.delete(
    `http://dev.trainee.dex-it.ru/api/Team/Delete?id=${itemID}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }
  );

  return data;
};
export const teamAPI = {
  getTeamList,
  getTeams,
  getTeam,
  addTeam,
  editTeam,
  deleteTeam,
};
