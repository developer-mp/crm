const QueryFilterType = require("../../utilities/content/queryFilterType");
const SearchEntity = require("../../utilities/search/searchEntity");

class QueryContentService {
  static filterType() {
    const list = QueryFilterType.getFilterTypes();
    return { list };
  }

  static getDetail(request) {
    const { user, searchId } = request;
    const search = SearchEntity.findEntity(searchId);
    const { entity } = search;
    let list = {};
    return { list };
  }
}

export default QueryContentService;
