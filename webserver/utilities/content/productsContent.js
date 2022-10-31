const detail = require("../../data/content/entities/products/detail.json");
const filter = require("../../data/content/entities/products/filter.json");
const yesno = require("../../data/content/entities/products/ref/yesno.json");
const processMode = require("../../data/content/entities/products/ref/processMode.json");

class ProductsContent {
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

export default ProductsContent;
