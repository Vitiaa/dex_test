import axios from "axios";

export const baseInstance = axios.create({
  baseURL: "http://dev.trainee.dex-it.ru/api",
  headers: { Authorization: `${localStorage.getItem("token")}` },
});
