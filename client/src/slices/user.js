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
  errorLogin: null,
  successLogin: false,
  loadingLogout: false,
  errorLogout: null,
  successLogout: false,
  firstName: "",
  lastName: "",
  verified: false,
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
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loadingRegister = false;
      state.successRegister = true;
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loadingRegister = false;
      state.errorRegister = payload;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loadingLogin = true;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loadingLogin = false;
      state.successLogin = true;
      state.accessToken = payload;
      state.message = payload;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.verified = payload.verified;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.loadingLogin = false;
      state.errorLogin = payload;
      state.successLogin = false;
    });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
