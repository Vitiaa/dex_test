import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const RegistrationUser = createAsyncThunk<
    string,
    { userName: string; login: string; password: string }
    >("RegistrationUser", async ({ userName, login, password }, dispatch) => {
    return await axios.post(`http://dev.trainee.dex-it.ru/api/Auth/SignUp`, {
        userName,
        login,
        password,
    });
});