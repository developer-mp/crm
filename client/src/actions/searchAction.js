import SearchService from "../services/searchService.js";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { queryFiltersItems } from "../slices/queryFiltersSlice.js";

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

// export const fetchQueryFilters = createAsyncThunk(
//   "search/fetchQueryFilters",
//   async (entityId, { rejectWithValue }) => {
//     try {
//       return await SearchService.getSearchConfiguration(entityId).then(
//         (json) => {
//           return json.data;
//         }
//       );
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );

export const fetchQueryFilters = createAsyncThunk(
  "search/fetchQueryFilters",
  async (entityId, { rejectWithValue }) => {
    try {
      return await SearchService.getSearchConfiguration(entityId).then(
        (json) => {
          console.log(json.data);
          return json.data;
        }
      );
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
