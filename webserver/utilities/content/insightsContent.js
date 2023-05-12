import insightsData from "../../data/entities/insights/data.json" assert { type: "json" };
import pkg from "lodash";
const { cloneDeep } = pkg;

class InsightContent {
  static getDataList() {
    const { list } = insightsData;
    return cloneDeep(list);
  }
}

export default InsightContent;
