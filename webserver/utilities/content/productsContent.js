import detail from "../../data/content/entities/products/detail.json" assert { type: "json" };
import filter from "../../data/content/entities/products/filter.json" assert { type: "json" };
import yesno from "../../data/content/entities/products/ref/yesno.json" assert { type: "json" };
import processMode from "../../data/content/entities/products/ref/processMode.json" assert { type: "json" };

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
