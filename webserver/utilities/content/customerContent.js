import customersData from "../../data/entities/customers/data.json" assert { type: "json" };
import pkg from "lodash";
const { cloneDeep } = pkg;

class CustomerContent {
  static getDataList() {
    const { list } = customersData;
    return cloneDeep(list);
  }
}

export default CustomerContent;
