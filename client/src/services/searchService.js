import ApiService from "./app/apiService.js";
//import { lodash as _ } from "lodash";

class SearchService {
  static getEntities() {
    return ApiService.noSecureCall("search/entities", {});
  }

  // static getQueryList(searchId) {
  //   return ApiService.noSecureCall("search/querylist", { searchId });
  // }

  // static getSearchConfiguration(searchId, queryFilterId) {
  //   return ApiService.secureCall("search/queryfilter", {
  //     searchId,
  //     queryFilterId,
  //   });
  // }

  // static getSearchConfiguration() {
  //   return ApiService.nonSecureCall("search/entities", {});
  // }

  static async getSearchConfiguration(entityId) {
    return await ApiService.noSecureCall("search/queryfilter", entityId);
  }

  // static getFilterTypes() {
  //   return ApiService.secureCall("content/filtertype", {});
  // }

  //   static getQueryResultGridContent(searchId) {
  //     return ApiService.secureCall("content/resultgrid", { searchId });
  //   }

  //   static getQueryResults(query) {
  //     return ApiService.secureCall("query/result", query);
  //   }

  //   static emailQueryResults(query) {
  //     return ApiService.secureCall("query/email", query);
  //   }

  //   static getItemDetailContent(searchId) {
  //     return ApiService.secureCall("content/detail", { searchId });
  //   }

  static getItemDetails(searchId, key, requestKeys) {
    return ApiService.noSecureCall("query/detail", {
      // searchId,
      // PK: key,
      // requestKeys,
    });
  }

  //   static saveQuery(query) {
  //     return ApiService.secureCall("search/querysave", query);
  //   }

  //   static deleteQuery(queryFilterId) {
  //     return ApiService.secureCall("search/querydelete", {
  //       queryId: queryFilterId,
  //     });
  //   }

  //   static lockDetailsRecord(searchId, key, requestKeys) {
  //     return ApiService.secureCall("query/lock", {
  //       searchId,
  //       PK: key,
  //       requestKeys,
  //     });
  //   }

  //   static unlockDetailsRecord(searchId, sessionId, key, requestKeys) {
  //     return ApiService.secureCall("query/unlock", {
  //       searchId,
  //       PK: key,
  //       requestKeys,
  //       sessionId,
  //     });
  //   }

  //   static commitDetailsRecord(searchId, sessionId, key, requestKeys) {
  //     return ApiService.secureCall("query/save", {
  //       searchId,
  //       PK: key,
  //       requestKeys,
  //       sessionId,
  //     });
  //   }

  //   static deleteDetailsRecord(searchId, sessionId, key, requestKeys) {
  //     return ApiService.secureCall("query/delete", {
  //       searchId,
  //       PK: key,
  //       requestKeys,
  //       sessionId,
  //     });
  //   }

  //   static updateDetailsRecord(
  //     searchId,
  //     sessionId,
  //     key,
  //     requestKeys,
  //     name,
  //     fields
  //   ) {
  //     const filters = _.map(fields, (value, key) => ({
  //       key,
  //       comparable: "Equals",
  //       value,
  //     }));
  //     return ApiService.secureCall("query/update", {
  //       searchId,
  //       PK: key,
  //       requestKeys,
  //       sessionId,
  //       name,
  //       filters,
  //     });
  //   }

  //   static deleteSubsectionRow(searchId, subsectionId, name, masterId) {
  //     return ApiService.secureCall("query/delete-subsection", {
  //       searchId,
  //       id: subsectionId,
  //       name,
  //       pk: masterId,
  //     });
  //   }

  //   static restoreDetailsRecord(searchId, sessionId, key, requestKeys) {
  //     return ApiService.secureCall("query/restore", {
  //       searchId,
  //       PK: key,
  //       requestKeys,
  //       sessionId,
  //     });
  //   }

  //   static refreshDetailsRecord(searchId, sessionId, key, requestKeys) {
  //     return ApiService.secureCall("query/refresh", {
  //       searchId,
  //       PK: key,
  //       requestKeys,
  //       sessionId,
  //     });
  //   }
}

export default SearchService;
