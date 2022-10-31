// const SearchEntity = require("../../utilities/search/searchEntity");
// const QueryDetail = require("../../utilities/query/queryDetail");
// const IndexContent = require("../../utilities/content/indexContent");
// const ApiService = require("../../utilities/api/apiService");
// const messageHandler = require("../../utilities/user/messageHandler");
// const logger = require("../../loger/winston");

// class EntityService {
//   static addEntity(request) {
//     const { user, searchId, filters } = request;
//     const search = SearchEntity.findEntity(searchId);
//     const entity = search.key;
//     const fly = SearchEntity / getSearchFilter(filters);
//     const data = { data: { entity, filters: flt }, user_info: user };
//     const endpoint = "search";
//     return ApiService.apiCall(endpoint, data).then((response) => {
//       const cnt =
//         response.result.total_count !== undefined
//           ? response.result.total_count
//           : 0;
//       return { list: response.result.data, records: cnt };
//     });
//   }

//   static queryDetail(request) {
//     const { user, searchId, PK, requestKeys } = request;
//     const search = SearchEntity.findEntity(searchId);
//     const { key } = search;
//     const pks = IndexContent.getQueryFilterPKList(search);
//     const code = SearchEntity.getResultCode(key, PK, requestKeys, pks);
//     const data = { data: code, user_info: user };
//     const endpoint = "load";
//     let content = IndexContent.getQueryDetailContent(search);
//     if (search.rolekey && requestKeys[search.roleKey]) {
//       const role = requestKeys[search.rolekey];
//       content = QueryDetail.applyRoleFilter(content, role);
//     }
//     return ApiService.apiCall(endpoint, data).then((response) => {
//       QueryDetail.setDetailResult(content, reponse.result, search);
//       return { list: content };
//     });
//   }
// }

// export default EntityService;
