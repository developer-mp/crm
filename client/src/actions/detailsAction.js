// import { createAsyncThunk } from "@reduxjs/toolkit";
// import AuthService from "../services/auth/authService.js";
// import UserService from "../services/user/userService.js";

// export const createDetails = createAsyncThunk(
//   "detail/createDetails",
//   (
//     { detailsId, keyType, key, requestKeys, searchId, resultsId },
//     { rejectWithValue }
//   ) => {
//     try {
//       //const SearchEntity = getSearchEntity(searchId);
//       return (dispatch)=>{
//         dispatch(newDetails).then((res) => {
//         UserService.storeToken(res.data.accessToken);
//         return res.data;
//       });
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);
//     }
//   }
// );
