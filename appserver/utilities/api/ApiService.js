import fetch from "cross-fetch";
import webError from "../../logger/webError.js";

class ApiService {
  static async bearerCall(token, data) {
    const url = "";
    return fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then(
      (response) => {
        const json = response.json();
        return json;
      },
      (error) => {
        const obj = { message: error.message, code: 500, arrError: [] };
        throw webError.AppServerError(obj, endpoint, data);
      }
    );
  }
}

export default ApiService;
