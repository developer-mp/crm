import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const baseUrl = process.env.BASE_URL;

class ApiService {
  static async apiCall(endpoint, data) {
    const url = `${baseUrl}/${endpoint}`;
    return await axios
      .post(url, data, { withCredentials: true })
      .then((res) => {
        res.data;
      });
  }
}

export default ApiService;
