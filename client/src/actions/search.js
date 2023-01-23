import SearchService from "../services/searchService.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchEntities = createAsyncThunk(
  "search/fetchSearchEntities",
  async (rejectWithValue) => {
    try {
      return await SearchService.getEntities().then((json) => {
        return json.data;
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
