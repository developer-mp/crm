import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDetail = createAsyncThunk(
  "detail/getDetail",
  async ({ row }, rejectWithValue) => {
    try {
      return await row;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const getDetail = (row) => {
//   return row;
// };
