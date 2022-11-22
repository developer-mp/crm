import filterType from "../../data/content/filtertype.json" assert { type: "json" };

class QueryFilterType {
  static getFilterTypes() {
    return filterType.data;
  }
}

export default QueryFilterType;
