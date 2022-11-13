import pkg from "lodash";
const { filter } = pkg;
import SearchEntity from "../../utilities/search/searchEntity.js";
// const SearchEntityResult = require("../../utilities/search/searchEntityResult");
import menus from "../../utilities/user/userMenu.js";
// const ApiService = require("../../utilities/api/apiService");
// const IndexContent = require("../../utilities/content/indexContent");
// const messageHandler = require("../../utilities/user/messageHandler");

class SearchService {
  static entityList(user) {
    // const { code, entities } = user;
    // const item = menus.userCode(code);
    // if (item.restricted) {
    //   return { list: [] };
    // }
    let list = SearchEntity.getEntityList();
    // list = filter(list, (obj) => entities.names.includes(obj.name));
    // SearchEntity.applyUserEntities(list, entities.keys);
    return { list };
  }

  // static queryList(request) {
  //   const { user, searchId } = request;
  //   const search = SearchEntity.findEntity(searchId);
  //   const entity = search.key;
  //   const data = { data: { entity }, user_info: user };
  //   const endpoint = "querylist";
  //   return ApiService.apiCall(endpoint, data).then((response) => {
  //     const list = _.map(response.result.data, (item) => {
  //       const isP = item.IsPublic ? "Public" : "Private";
  //       return { id: item.QueryID, name: item.QueryName, typeLisP };
  //     });
  //     return { list };
  //   });
  // }

  // static queryFilter(request) {
  //   const { user, searchId, queryFilterId } = request;
  //   const search = SearchEntity.findEntity(searchId);
  //   const list = Indexcontent.getQueryFilterList({ search });
  //   if (queryFilterId === null || queryFilterId === 0) {
  //     return Promise.resolve({ list, info: {} });
  //   }
  //   const data = { data: { QueryID: queryFilterId }, user_info: user };
  //   const endpoint = "queryload";
  //   return ApiService.apiCall(endpoint, data).then((response) => {
  //     const { QueryDetails, QueryColumns, QueryFilters } = response.result;
  //     const info = SearchEntityResult.queryInfo(QueryDetails);
  //     SearchEntityResult.applyColumns(list, QueryColumns);
  //     SearchEntityResult.applyColumns(list, QueryFilters);
  //     return { list, info };
  //   });
  // }

  // static queryDelete(request) {
  //   const { user, queryId } = request;
  //   const data = { data: { QueryID: queryId }, user_info: user };
  //   const endpoint = "delquery";
  //   return ApiService.apiCall(endpoint, data).then((response) => {
  //     const message = messageHandler.getAppMessage(
  //       response.status.return_code,
  //       endpoint,
  //       response.status.message
  //     );
  //     return { message };
  //   });
  // }
}

export default SearchService;
