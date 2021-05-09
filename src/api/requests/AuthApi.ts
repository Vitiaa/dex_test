import axios from "axios";
import {AuthParams, RegistrationInterface} from "../dto/AuthDto/types";

const auth = async (params: AuthParams) => {
  const { data } = await axios.post(
    `http://dev.trainee.dex-it.ru/api/Auth/SignIn`,
    {
      login: params.login,
      password: params.password,
    }
  );

  return data;
};

const registration = async (params: RegistrationInterface) => {
  const { data } = await axios.post(`http://dev.trainee.dex-it.ru/api/Auth/SignUp`, {
    userName: params.userName,
    login: params.login,
    password: params.password,
  });
  return data;
};


export const authAPI = {
  auth,
  registration,
};
