import UserService from "../services/user/userService.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDashboardItems = createAsyncThunk(
  "dashboard/getDashboardItems",
  async (rejectWithValue) => {
    try {
      return await UserService.getUserMenu().then((json) => {
        return json.userMenu.dashboard;
      });
    } catch (error) {
      return rejectWithValue();
    }
  }
);
