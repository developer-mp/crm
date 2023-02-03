import SearchEntity from "../../utilities/search/searchEntity.js";
import IndexContent from "../../utilities/content/indexContent.js";
import ApiService from "../../utilities/api/apiService.js";

class ResultService {
  static async queryResult(request) {
    const searchId = request;
    const searchKey = SearchEntity.findEntity(searchId);
    let detail = IndexContent.findDataContent(searchId);
    const endpoint = searchKey;
    return ApiService.apiCall(endpoint, {}).then((res) => {
      return { data: res, detail };
    });
  }
}

export default ResultService;
