import dataList from "../../data/entities/customers/filter.json" assert { type: "json" };
import pkg from "lodash";
const { cloneDeep } = pkg;

class IndexContent {
  static getDataList() {
    const { list } = dataList;
    return cloneDeep(list);
  }

  static findDataContent(id) {
    const arr = this.getDataList();
    let dataContent = arr.find((x) => x.id === id).detail;
    return dataContent;
  }
}

export default IndexContent;
