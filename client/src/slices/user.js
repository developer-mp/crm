import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "../actions/user.js";

const initialState = {
  loadingRegister: false,
  errorRegister: null,
  successRegister: false,
  loadingVerifyEmail: false,
  errorVerifyEmail: null,
  successVerifyEmail: false,
  loadingLogin: false,
  errorLogin: false,
  successLogin: false,
  loadingLogout: false,
  errorLogout: null,
  successLogout: false,
  firstName: "",
  lastName: "",
  accessToken: "",
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.successLogin = false;
      state.successLogout = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loadingRegister = true;
      state.errorRegister = null;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loadingRegister = false;
      state.successRegister = true;
      state.errorRegister = null;
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loadingRegister = false;
      state.errorRegister = payload;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loadingLogin = true;
      state.errorLogin = false;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loadingLogin = false;
      state.successLogin = true;
      state.accessToken = payload;
      state.message = payload.message;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.errorLogin = false;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.loadingLogin = false;
      state.errorLogin = true;
      // state.message = payload.response.data.message;
      state.successLogin = false;
    });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
