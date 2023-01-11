import SearchEntity from "../../utilities/search/searchEntity.js";
import QueryDetail from "../../utilities/query/queryDetail.js";
import IndexContent from "../../utilities/content/indexContent.js";
import ApiService from "../../utilities/api/apiService.js";
import UpdateEndpoint from "../../utilities/content/queryUpdateEndpoint.js";
import axios from "axios";
import pkg from "lodash";
const { merge, forEach } = pkg;

class QueryService {
  static async queryResult(request) {
    const searchId = 101;
    const searchKey = SearchEntity.findEntity(searchId);
    // const data = { data: { searchKey } };
    let data = IndexContent.findDataContent(searchId);
    const endpoint = searchKey;
    return ApiService.apiCall(endpoint, {}).then((res) => {
      function getValueByKey(object, key) {
        return object[key];
      }

      let dataFieldArr = data.map((v) => v.dataField);

      let column = data
        .filter((el) => el.isSelected === true)
        .map(({ isSelected, ...item }) => item);
      // .map((v) => v.label);

      // return { data: res, headers };

      // data.forEach((el) => {
      //   for (var i = 0; i < dataFieldArr.length; i++) {
      //     if (el.dataField === dataFieldArr[i])
      //       el.value = getValueByKey(res.record[0], dataFieldArr[i]);
      //   }
      // });

      // for (var i = 0; i < res.record.length; i++) {
      //   res.record[i]["newKey"] = res.record[i]["id"];
      //   delete res.record[i]["id"];
      // }

      // for (var i = 0; i < res.record.length; i++) {
      //   for (var j = 0; j < dataFieldArr.length; j++) {
      //     for (var k = 0; k < dataFieldArrNotSelected.length; k++) {
      //       if (Object.keys(res.record[i])[j] === dataFieldArrNotSelected[k]) {
      //         delete res.record[i][dataFieldArrNotSelected[k]];
      //       }
      //     }
      //   }
      // }
      return { data: res, column };
    });
  }

  static async queryDetail() {
    // const { searchId, PK, requestKeys } = request;
    const search = SearchEntity.findEntity(1);
    // const { key, load, topic } = search;
    // const pks = IndexContent.getQueryFilterPKList(search);
    // const code = SearchEntity.getResultCode(key, PK, requestKeys, pks);
    // const data = { data: { ...topic }, detail: load };
    // const endpoint = `${key}/load`;
    // let content = IndexContent.getQueryDetailContent(search);
    // if (PK === 0) {
    //   content = QueryDetail.applyFilterForAdd(content, load);
    //   const ddlendpoint = UpdateEndpoint.getDDLEndpoint(topic);
    //   if (!ddlendpoint) return Promise.resolve({ list: content });

    //   const endpointD = `${key}/${ddlendpoint}`;
    //   return ApiService.apiCall(endpointD, data).then((response) => {
    //     if (response.ddls != undefined) {
    //       IndexContent.setQueryDetailDynamicDDL(content, response.ddls);
    //     }
    //     return { list: content };
    //   });
    // }
    // if (search.rolekey && requestKeys[search.rolekey]) {
    //   const role = requestKeys[search.rolekey];
    //   content = QueryDetail.applyRoleFilter(content, role);
    // }
    // if (data.data.topic === "") {
    //   data.data.topic = undefined;
    // }

    // return ApiService.apiCall(endpoint, data).then((response) => {
    //   content = QueryDetail.applyCRMFilter(
    //     content,
    //     search,
    //     response.result,
    //     "salesforce"
    //   );
    // if (response.ddls != undefined) {
    //   IndexContent.setQueryDetailDynamicDDL(content, response.data);
    // }
    // QueryDetail.setDetailResult(content, response.result, search);
    // return { list: content };
    // });

    // const endpoint = `${key}/load`;
    // const endpoint = "customer/load";
    // const resp = await ApiService.apiCall(endpoint, {});
    // console.log(resp);
    // if (resp !== undefined) return Promise.resolve({ resp });

    // const endpoint = "customer/load";
    // return await ApiService.apiCall(endpoint, {}).then((response) => {
    // content = QueryDetail.applyCRMFilter(
    //   content,
    //   search,
    //   response,
    //   "salesfoce"
    // );
    // if (response.ddls != undefined) {
    //   IndexContent.setQueryDetailDynamicDDL(content, response.ddls);
    // }
    // const mergedObject = merge(content, response);
    // content = QueryDetail.setDetailResult(content, response);
    // return { list: content };

    //   function getValueByKey(object, key) {
    //     return object[key];
    //   }

    //   let dataFieldArr = content[0].info[0].record.map((v) => v.dataField);

    //   content[0].info[0].record.forEach((el) => {
    //     for (var i = 0; i < dataFieldArr.length; i++) {
    //       if (el.dataField === dataFieldArr[i])
    //         el.value = getValueByKey(response[0], dataFieldArr[i]);
    //     }
    //   });
    //   return content[0].info[0].record;
    // });
  }

  // static queryUpdate(request) {
  //   const { searchId, PK, filters, name } = request;
  //   const search = SearchEntity.findEntity(searchId);
  //   const { key, load, topic } = search;
  //   const el = SearchEntity.buildAppRequest(PK, filters, name, topic);
  //   const apprequest = { data: el, detail: load };
  //   const endpointsuffix = UpdateEndpoint.getUpdateEndpoint(name);
  //   const endpoint = `${key}/${endpointsuffix}`;

  //   return ApiService.apiCall(endpoint, apprequest).then((response) => {
  //     const { session, result } = response;
  //     const record = { data: filters, name };
  //     return { record, session };
  //   });
  // }

  // static queryDelete(request) {
  //   const { searchId, PK, filters, name } = request;
  //   const search = SearchEntity.findEntity(searchId);
  //   const { key, load } = search;
  //   const el = SearchEntity.buildAppRequest(PK, filters, name, topic);
  //   const data = { data: el, detail: load };
  //   const endpoint = `${key}/delete`;
  //   return ApiService.apiCall(endpoint, data).then((response) => {
  //     const { session } = response;
  //     const record = { data: filters, name };
  //     return { record, session };
  //   });
  // }

  // static queryRefresh(request) {
  //   const { searchId, PK, filters, name } = request;
  //   const search = SearchEntity.findEntity(searchId);
  //   const { key, load } = search;
  //   const el = SearchEntity.buildAppRequest(PK, filters, name, topic);
  //   const data = { data: el, detail: load };
  //   const endpoint = `${key}/refresh`;
  //   return ApiService.apiCall(endpoint, data).then((response) => {
  //     const { session } = response;
  //     const record = { data: filters, name };
  //     return { record, session };
  //   });
  // }
}

export default QueryService;
