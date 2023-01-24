import ResultService from "../services/result/resultService.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getResult = createAsyncThunk(
  "result/getResult",
  async (searchId, { rejectWithValue }) => {
    try {
      return await ResultService.getResultData(searchId).then((json) => {
        return json.data;
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
