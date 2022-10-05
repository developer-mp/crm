// import axios from "axios";

// const baseUrl = process.env.REACT_APP_BASE_URL;

// class ApiService {
//   static async noSecureCall(endpoint, data) {
//     const url = baseUrl + endpoint;
//     const token = "11";
//     console.log(token);
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     return await axios.post(url, data, { withCredentials: true });
//   }

//   // static async secureCall(endpoint, data) {
//   //   const url = baseUrl + endpoint;
//   //   const token = (axios.defaults.headers.common[
//   //     "Authorization"
//   //   ] = `Bearer ${accessToken}`);

//   //   if (!token) {
//   //     return Promise.reject();
//   //   } else {
//   //     return await axios.post(url, data, { withCredentials: true });
//   //   }
//   // }
// }

// export default ApiService;

import axios from "axios";
import SessionService from "./sessionService.js";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const ApiServiceNoSecureCall = async (endpoint, data) => {
  const url = baseUrl + endpoint;
  return await axios.post(url, data, { withCredentials: true });
};

export const ApiServiceSecureCall = async (endpoint, data) => {
  const url = baseUrl + endpoint;
  const token = SessionService.getToken();
  console.log(token);
  if (!token) {
    return Promise.reject();
  } else {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return await axios.post(url, data, { withCredentials: true });
  }
};
