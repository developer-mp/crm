import ApiService from "../app/apiService.js";

class ResultService {
  static getResultData(searchId) {
    return ApiService.noSecureCall("result", { searchId });
  }
}

export default ResultService;
