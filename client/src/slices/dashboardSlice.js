import { createSlice } from "@reduxjs/toolkit";
import { getDashboardItems } from "../actions/dashboard.js";

const initialState = {
  dashboardItems: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDashboardItems.pending, (state) => {
      state.dashboardItems = [];
    });
    builder.addCase(getDashboardItems.fulfilled, (state, { payload }) => {
      state.dashboardItems = payload;
    });
    builder.addCase(getDashboardItems.rejected, (state) => {
      state.dashboardItems = [];
    });
  },
});

export default dashboardSlice.reducer;
