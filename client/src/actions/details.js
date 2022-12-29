import SearchService from "../services/searchService.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createDetails = createAsyncThunk(
  "details/createDetails",
  async (
    // { detailsId, key, requestKeys, searchId, resultsId },
    // { key, requestKeys, searchId },
    rejectWithValue
  ) => {
    try {
      return await SearchService
        .getItemDetails
        // searchId,
        // key,
        // requestKeys
        ()
        .then((json) => {
          return json.data;
        });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
