import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk<
    string,
    { login: string; password: string }
    >("auth/setAuth", async ({ login, password }, dispatch) => {
    const { data } = await axios.post(
        `http://dev.trainee.dex-it.ru/api/Auth/SignIn`,
        {
            login,
            password,
        }
    );

    return data;
});