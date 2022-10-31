const detail = require("../../data/content/entities/cutomers/detail.json");
const filter = require("../../data/content/entities/cutomers/filter.json");
const yesno = require("../../data/content/entities/customers/ref/yesno.json");
const processMode = require("../../data/content/entities/customers/ref/processMode.json");

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
