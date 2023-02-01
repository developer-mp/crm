import customersData from "../../data/entities/customers/filter.json" assert { type: "json" };
import productsData from "../../data/entities/products/filter.json" assert { type: "json" };
import pkg from "lodash";
const { cloneDeep } = pkg;

class IndexContent {
  static getDataList() {
    const { list } = productsData;
    return cloneDeep(list);
  }

  static findDataContent(id) {
    const arr = this.getDataList();
    let dataContent = arr.find((x) => x.id === id).detail;
    return dataContent;
  }
}

export default IndexContent;
