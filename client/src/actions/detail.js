import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDetail = createAsyncThunk(
  "detail/getDetail",
  (row, rejectWithValue) => {
    try {
      return row;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
