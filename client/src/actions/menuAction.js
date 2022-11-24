import UserService from "../services/user/userService.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMenuItems = createAsyncThunk(
  "menu/getMenuItems",
  async (rejectWithValue) => {
    try {
      return await UserService.getUserMenu().then((json) => {
        return json.userMenu.menu;
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
