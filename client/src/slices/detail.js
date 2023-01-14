import { createSlice } from "@reduxjs/toolkit";
import { getDetail } from "./../actions/detail.js";

const initialState = {
  detail: [],
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetail.pending, (state) => {
      state.detail = [];
    });
    builder.addCase(getDetail.fulfilled, (state, { payload }) => {
      state.detail = payload;
    });
    builder.addCase(getDetail.rejected, (state) => {
      state.detail = [];
    });
  },
});

export default detailSlice.reducer;
