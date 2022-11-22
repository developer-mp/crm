import detail from "../../data/content/entities/services/detail.json" assert { type: "json" };
import filter from "../../data/content/entities/services/filter.json" assert { type: "json" };
import yesno from "../../data/content/entities/services/ref/yesno.json" assert { type: "json" };
import processMode from "../../data/content/entities/services/ref/processMode.json" assert { type: "json" };

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
