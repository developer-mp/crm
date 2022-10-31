const detail = require("../../data/content/entities/services/detail.json");
const filter = require("../../data/content/entities/services/filter.json");
const yesno = require("../../data/content/entities/services/ref/yesno.json");
const processMode = require("../../data/content/entities/services/ref/processMode.json");

class servicesContent {
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

export default servicesContent;
