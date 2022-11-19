import detail from "../../data/content/entities/customers/detail.json" assert { type: "json" };
import filter from "../../data/content/entities/customers/filter.json" assert { type: "json" };
import yesno from "../../data/content/entities/customers/ref/yesno.json" assert { type: "json" };
import processMode from "../../data/content/entities/customers/ref/processMode.json" assert { type: "json" };

class CustomersContent {
  static getDetailContent() {
    return detail.data;
  }

  static getFilterContent() {
    return filter.data;
  }

  static getDropDownData(name) {
    switch (name) {
      case "IsActive":
        return yesno.data;
      case "ProcessMode":
        return processMode.data;
      default:
        return [];
    }
  }
}

export default CustomersContent;
