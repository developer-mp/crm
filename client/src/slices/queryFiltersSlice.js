import { createSlice } from "@reduxjs/toolkit";
import { fetchQueryFilters } from "../actions/searchAction.js";

const initialState = {
  queryFiltersItems: [],
};

const queryFiltersSlice = createSlice({
  name: "queryFilters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQueryFilters.pending, (state) => {
      state.queryFiltersItems = [];
    });
    builder.addCase(fetchQueryFilters.fulfilled, (state, { payload }) => {
      state.queryFiltersItems = payload;
    });
    builder.addCase(fetchQueryFilters.rejected, (state) => {
      state.queryFiltersItems = [];
    });
  },
});

export default queryFiltersSlice.reducer;
