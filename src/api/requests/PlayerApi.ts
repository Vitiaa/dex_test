import axios from "axios";
import { PlayerInterface } from "../dto/PlayerDto/types";
import { baseInstance } from "../constants";

const getPlayers = async (pageNum = 1, size = 6, name = "", TeamIds: []) => {
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
};
const getTeamsPlayers = async (teamID: number) => {
  const { data } = await axios.get(
    `http://dev.trainee.dex-it.ru/api/Player/GetPlayers?TeamIds=${teamID}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }
  );

  return data;
};

const addPlayer = async (params: PlayerInterface, payload: unknown) => {
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
};
const editPlayer = async (params: PlayerInterface, img: unknown) => {
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
};
const deletePlayer = async (itemID: number) => {
  const { data } = await axios.delete(
    `http://dev.trainee.dex-it.ru/api/Player/Delete?id=${itemID}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }
  );

  return data;
};
const getPlayerPositions = async () => {
  const { data } = await baseInstance.get(
    `http://dev.trainee.dex-it.ru/api/Player/GetPositions`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }
  );

  return data;
};
export const playerAPI = {
  getPlayers,
  getTeamsPlayers,
  addPlayer,
  editPlayer,
  deletePlayer,
  getPlayerPositions,
};
