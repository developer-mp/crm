import SearchService from "../services/searchService.js";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { queryFiltersItems } from "../slices/queryFiltersSlice.js";

// export const constructNewQuery = createAsyncThunk(
//   "query/constructNewQuery",
//   async (queryId, entityId, { rejectWithValue }) => {
//     try {
//       return await SearchService.getSearchConfiguration(entityId).then(
//         (json) => {
//           console.log(json.data);
//           return json.data;
//         }
//       );
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );

export const constructNewQuery = (queryId, searchId) => {};
