import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const addImage = createAsyncThunk<string, FileList>(
    "img/addImage",
    async (params, dispatch) => {
        const formData = new FormData();
        formData.append("file", params[0]);
        if (formData){ const { data } = await axios.post(`http://dev.trainee.dex-it.ru/api/Image/SaveImage`, formData,{
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });

            return data;}

    }
);

