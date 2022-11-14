//import axios from "axios";

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
// import SessionService from "./sessionService.js";
// import {
//   UnauthorizedError,
//   ForbiddenError,
//   ServerError,
//   AppServerError,
// } from "./errors.js";

const baseUrl = process.env.REACT_APP_BASE_URL;

class ApiService {
  static noSecureCall = async (endpoint, data) => {
    const url = baseUrl + endpoint;
    return await axios.post(url, data, { withCredentials: true });
  };

  // class ApiService {
  //   static async noSecureCall(endpoint, data) {
  //     const url = baseUrl + endpoint;
  //     //don't need response.json()
  //     return await axios
  //       .post(url, data, { withCredentials: true })
  //       .then((response) => response.json())
  //       .then(
  //         (json) => {
  //           if (json.error === "Internal Server Error") throw ServerError();
  //           if (json.error === "ApplicationServerError")
  //             throw AppServerError(json.message);
  //           return json;
  //         },
  //         (error) => {
  //           throw ServerError(error.message);
  //         }
  //       );
  //   }

  //   static async secureCall(endpoint, data) {
  //     const url = baseUrl + endpoint;
  //     const token = SessionService.getToken();
  //     console.log(token);
  //     if (!token) {
  //       return Promise.reject(UnauthorizedError());
  //     } else {
  //       //axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //       return await axios
  //         .post(url, data, { withCredentials: true })
  //         .then((response) => response.json())
  //         .then(
  //           (json) => {
  //             if (json.error === "Internal Server Error")
  //               throw AppServerError(json.message);
  //             if (json.error === "ApplicationServerError")
  //               throw AppServerError(json.message);
  //             if (json.error === "Unauthorized") throw UnauthorizedError();
  //             if (json.error === "Forbidden") throw ForbiddenError();
  //             return json;
  //           },
  //           (error) => {
  //             throw ServerError(error.message);
  //           }
  //         );
  //     }
  //   }
  // }

  // export const ApiServiceSecureCall = async (endpoint, data) => {
  //   const url = baseUrl + endpoint;
  //   const token = SessionService.getToken();
  //   console.log(token);
  //   if (!token) {
  //     return Promise.reject();
  //   } else {
  //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //     return await axios.post(url, data, { withCredentials: true });
  //   }
}

export default ApiService;
