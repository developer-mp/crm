import ApiService from "../app/apiService.js";

class ResultService {
  static getResultData() {
    return ApiService.noSecureCall("result", {});
  }
}

export default ResultService;
