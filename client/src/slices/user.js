import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
} from "../actions/user.js";

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
  loadingForgotPassword: false,
  errorForgotPassword: false,
  successForgotPassword: false,
  loadingResetPassword: false,
  errorResetPassword: false,
  successResetPassword: false,
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
    resetForgotPassword: (state) => {
      state.loadingForgotPassword = false;
      state.errorForgotPassword = null;
      state.successForgotPassword = false;
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
    builder.addCase(forgotPassword.pending, (state) => {
      state.loadingForgotPassword = true;
      state.errorForgotPassword = false;
      state.successForgotPassword = false;
    });
    builder.addCase(forgotPassword.fulfilled, (state, { payload }) => {
      state.loadingForgotPassword = false;
      state.errorForgotPassword = false;
      state.successForgotPassword = true;
    });
    builder.addCase(forgotPassword.rejected, (state) => {
      state.loadingForgotPassword = false;
      state.errorForgotPassword = true;
      state.successForgotPassword = false;
    });
    builder.addCase(resetPassword.pending, (state) => {
      state.loadingResetPassword = true;
      state.errorResetPassword = false;
      state.successResetPassword = false;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.loadingResetPassword = false;
      state.errorResetPassword = false;
      state.successResetPassword = true;
    });
    builder.addCase(resetPassword.rejected, (state) => {
      state.loadingResetPassword = false;
      state.errorResetPassword = true;
      state.successResetPassword = false;
    });
  },
});

export const { logoutUser, resetForgotPassword } = userSlice.actions;

export default userSlice.reducer;
