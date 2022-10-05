import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser } from "../actions/userAction.js";

const initialState = {
  loadingRegister: false,
  errorRegister: null,
  successRegister: false,
  loadingLogin: false,
  errorLogin: null,
  successLogin: false,
  loadingLogout: false,
  errorLogout: null,
  successLogout: false,
  lastName: "",
  firstName: "",
  email: "",
  accessToken: "",
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loadingRegister = true;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loadingRegister = false;
      state.successRegister = true;
      state.firstName = payload;
      state.lastName = payload;
      state.email = payload;
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loadingRegister = false;
      state.errorRegister = payload;
      state.successRegister = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loadingLogin = true;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loadingLogin = false;
      state.successLogin = true;
      state.accessToken = payload;
      state.message = payload;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.loadingLogin = false;
      state.errorLogin = payload;
      state.successLogin = false;
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.loadingLogout = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.successLogin = false;
      state.successLogout = true;
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.accessToken = "";
    });
    builder.addCase(logoutUser.rejected, (state, { payload }) => {
      state.loadingLogout = false;
      state.errorLogout = payload;
      state.successLogout = false;
    });
  },
});

export default userSlice.reducer;
