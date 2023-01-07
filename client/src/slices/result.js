import { createSlice } from "@reduxjs/toolkit";
import { getResult } from "./../actions/result.js";

const initialState = {
  result: [],
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getResult.pending, (state) => {
      state.result = [];
    });
    builder.addCase(getResult.fulfilled, (state, { payload }) => {
      state.result = payload;
    });
    builder.addCase(getResult.rejected, (state) => {
      state.result = [];
    });
  },
});

export default resultSlice.reducer;
