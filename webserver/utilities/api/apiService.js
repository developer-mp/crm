import axios from "axios";
import dotenv from "dotenv";
//import webError from "../../logger/webError.js";
dotenv.config();

const baseUrl = process.env.BASE_URL;

class ApiService {
  static async apiCall(endpoint, data) {
    const url = `${baseUrl}/${endpoint}`;
    return await axios
      .post(url, data, { withCredentials: true })
      .then((res) => {
        return res.data;
      });
  }
}

// class ApiService {
//   static async apiCall(endpoint, data) {
//     const url = `${baseUrl}/${endpoint}`;
//     return await axios.post(url, data, { withCredentials: true }).then(
//       (res) => {
//         if (res && res.status.code >= 200 && res.status.code < 300) {
//           res.data;
//         }
//         const appError = {
//           message: res.status.message,
//           code: res.status.return_code,
//           errors: res.status.errors,
//         };
//         if (endpoint === "cancel" || endpoint === "save") {
//           webError.saveAppServerError(appError, endpoint, data);
//           return res;
//         }
//         throw webError.AppServerError(appError, endpoint, data);
//       },
//       (error) => {
//         const obj = { message: error.message, code: 500, arrError: [] };
//         throw webError.AppServerError(obj, endpoint, data);
//       }
//     );
//   }
// }

export default ApiService;
