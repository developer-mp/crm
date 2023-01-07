import ApiService from "../app/apiService.js";

class ResultService {
  static getResultData() {
    return ApiService.noSecureCall("query/result", {}).then((json) => json);
  }
}

export default ResultService;
