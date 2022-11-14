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
      state.dashboardItems1 = [];
    });
    builder.addCase(fetchSearchEntities.fulfilled, (state, { payload }) => {
      state.dashboardItems1 = payload;
    });
    builder.addCase(fetchSearchEntities.rejected, (state) => {
      state.dashboardItems1 = [];
    });
  },
});

export default searchEntitiesSlice.reducer;
