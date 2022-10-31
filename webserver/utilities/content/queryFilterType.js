const filterType = require("../../data/content/filtertype.json");

class QueryFilterType {
  static getFilterTypes() {
    return filterType.data;
  }
}

export default QueryFilterType;
