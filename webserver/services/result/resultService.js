import SearchEntity from "../../utilities/search/searchEntity.js";
import QueryDetail from "../../utilities/query/queryDetail.js";
import IndexContent from "../../utilities/content/indexContent.js";
import ApiService from "../../utilities/api/apiService.js";
import UpdateEndpoint from "../../utilities/content/queryUpdateEndpoint.js";
import axios from "axios";
import pkg from "lodash";
const { merge, forEach } = pkg;

class ResultService {
  static async queryResult(request) {
    const searchId = 101;
    const searchKey = SearchEntity.findEntity(searchId);
    // const data = { data: { searchKey } };
    let detail = IndexContent.findDataContent(searchId);
    const endpoint = searchKey;
    return ApiService.apiCall(endpoint, {}).then((res) => {
      // function getValueByKey(object, key) {
      //   return object[key];
      // }

      // let dataFieldArr = data.map((v) => v.dataField);

      // let column = data
      //   .filter((el) => el.isSelected === true)
      //   .map(({ isSelected, ...item }) => item);
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
      return { data: res, detail };
    });
  }
}

export default ResultService;
