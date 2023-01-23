import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/auth/authService.js";
import UserService from "../services/user/userService.js";
import axios from "axios";
import { useParams } from "react-router-dom";
axios.defaults.withCredentials = true;

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ firstName, lastName, email, password }, { rejectWithValue }) => {
    try {
      await AuthService.registerUserService(
        firstName,
        lastName,
        email,
        password
      ).then((res) => {
        return res.data;
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const verifyEmail = createAsyncThunk(
//   "auth/verifyEmail",
//   (rejectWithValue) => {
//     const { verificationcode } = useParams();
//     try {
//       return AuthService.verifyEmailUserService(verificationcode).then(
//         (res) => {
//           return res.data;
//         }
//       );
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);
//     }
//   }
// );

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  ({ email, password }, { rejectWithValue }) => {
    try {
      return AuthService.loginUserService(email, password).then((res) => {
        UserService.storeToken(res.data.accessToken);
        return res.data;
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export let token = UserService.storeToken();

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  (rejectWithValue) => {
    try {
      return AuthService.logoutUserService().then((res) => {
        return res.data;
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
