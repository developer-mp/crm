import ResultService from "../services/result/resultService.js";
import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../services/app/apiService.js";

export const getResult = createAsyncThunk(
  "result/getResult",
  async (rejectWithValue) => {
    try {
      // return await ResultService.getResultData().then((json) => {
      //   console.log(json);
      //   return json;
      // });
      return await ApiService.noSecureCall("query/result", {}).then((json) => {
        return json.data;
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
