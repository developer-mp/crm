import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchEntities } from "../actions/searchAction.js";

const initialState = {
  searchEntities: [],
};

const searchEntitiesSlice = createSlice({
  name: "searchEntities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchEntities.pending, (state) => {
      state.searchEntities = [];
    });
    builder.addCase(fetchSearchEntities.fulfilled, (state, { payload }) => {
      state.searchEntities = payload;
    });
    builder.addCase(fetchSearchEntities.rejected, (state) => {
      state.searchEntities = [];
    });
  },
});

export default searchEntitiesSlice.reducer;
