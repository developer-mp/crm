import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, verifyEmail } from "../actions/user.js";

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
  accessToken: "",
  message: "",
  verificationCode: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.successLogin = false;
      state.successLogout = true;
    },
    // setUserName: (state, action) => {
    //   state.firstName = action.payload.split(" ")[0];
    //   state.lastName = action.payload.split(" ")[1];
    // },
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
      state.successRegister = false;
    });
    builder.addCase(verifyEmail.pending, (state) => {
      state.loadingVerifyEmail = true;
    });
    builder.addCase(verifyEmail.fulfilled, (state, { payload }) => {
      state.loadingVerifyEmail = false;
      state.successVerifyEmail = true;
      state.verificationCode = payload;
    });
    builder.addCase(verifyEmail.rejected, (state, { payload }) => {
      state.loadingVerifyEmail = false;
      state.errorVerifyEmail = payload;
      state.successVerifyEmail = false;
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
  },
});

export const { logoutUser, setUserName } = userSlice.actions;

export default userSlice.reducer;
