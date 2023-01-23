import SearchEntity from "../../utilities/search/searchEntity.js";
import SearchEntityResult from "../../utilities/search/searchEntityResult.js";
//import menus from "../../utilities/user/userMenu.js";
import ApiService from "../../utilities/api/apiService.js";
import IndexContent from "../../utilities/content/indexContent.js";
// const messageHandler = require("../../utilities/user/messageHandler");
// import pkg from "lodash";
// const { map } = pkg;

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
  //     const list = map(response.result.data, (item) => {
  //       return {
  //         id: item.QueryID,
  //         name: item.QueryName,
  //       };
  //     });
  //     return { list };
  //   });
  // }

  // static async queryFilter(request) {
  //   const {
  //     //user,
  //     searchId,
  //     queryFilterId,
  //   } = request;
  //   const search = SearchEntity.findEntity(searchId);
  //   const list = IndexContent.getQueryFilterList({ search });
  //   if (queryFilterId === null || queryFilterId === 0) {
  //     return Promise.resolve({ list, info: {} });
  //   }
  //   const data = {
  //     data: { QueryID: queryFilterId },
  //     //user_info: user,
  //   };
  //   const endpoint = "queryload";
  //   const response = await ApiService.apiCall(endpoint, data);
  //   const { QueryDetails, QueryColumns, QueryFilters } = response.result;
  //   const info = SearchEntityResult.queryInfo(QueryDetails);
  //   SearchEntityResult.applyColumns(list, QueryColumns);
  //   SearchEntityResult.applyColumns(list, QueryFilters);
  //   return { list, info };
  // }

  // static async findQueryFilter(params) {
  //   const { entityId } = params;
  //   const entityName = SearchEntity.findEntity(entityId);
  //   const filterList = IndexContent.getQueryFilterList({ entityName });
  //   return { filterList };
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
