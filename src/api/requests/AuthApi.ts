import axios from "axios";
import {AuthParams, RegistrationInterface, RegistrationParams} from "../dto/AuthDto/types";

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

const registration = async (params: RegistrationParams) => {
  return await axios.post(`http://dev.trainee.dex-it.ru/api/Auth/SignUp`, {
    userName: params.userName,
    login: params.login,
    password: params.password,
  });
};
export const authAPI = {
  auth,
  registration,
};
