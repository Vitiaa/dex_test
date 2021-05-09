import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {imageAPI} from "../../api/requests/ImageApi";
export const addImage = createAsyncThunk<string, FileList>(
  "img/addImage",
  async (params) => {
    const formData = new FormData();
    formData.append("file", params[0]);
    if (formData) {
      const addImage =  await imageAPI.AddImage(formData);
      return addImage;
    }
  }
);
