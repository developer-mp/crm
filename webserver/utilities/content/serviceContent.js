import servicesData from "../../data/entities/services/data.json" assert { type: "json" };
import pkg from "lodash";
const { cloneDeep } = pkg;

class ServiceContent {
  static getDataList() {
    const { list } = servicesData;
    return cloneDeep(list);
  }
}

export default ServiceContent;
