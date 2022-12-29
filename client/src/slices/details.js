import { createSlice } from "@reduxjs/toolkit";
import { createDetails } from "./../actions/details.js";

const initialState = {
  detailItems: [],
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createDetails.pending, (state) => {
      state.detailItems = [];
    });
    builder.addCase(createDetails.fulfilled, (state, { payload }) => {
      state.detailItems = payload;
    });
    builder.addCase(createDetails.rejected, (state) => {
      state.detailItems = [];
    });
  },
});

export default detailSlice.reducer;
