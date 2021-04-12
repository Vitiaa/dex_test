import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseInstance } from "../../api/constants";

export const addImage = createAsyncThunk<string, FileList>(
  "img/addImage",
  async (params, dispatch) => {
    const formData = new FormData();
    formData.append("file", params[0]);

    const { data } = await baseInstance.post(`/Image/SaveImage`, formData);

    return data;
  }
);
// export const deleteImage = createAsyncThunk<string>(
//   "img/addImage",
//   async (params, dispatch) => {
//     const { data } = await baseInstance.delete(`/Image/DeleteImage?fileName=`);
//
//     return data;
//   }
// );
