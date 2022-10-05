import { createSlice } from "@reduxjs/toolkit";
import { getMenuItems } from "../actions/menuAction.js";

const initialState = {
  menuItems: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenuItems.pending, (state) => {
      state.menuItems = [];
    });
    builder.addCase(getMenuItems.fulfilled, (state, { payload }) => {
      state.menuItems = payload;
    });
    builder.addCase(getMenuItems.rejected, (state) => {
      state.menuItems = [];
    });
  },
});

export default menuSlice.reducer;
