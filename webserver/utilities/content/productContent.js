import productsData from "../../data/entities/products/data.json" assert { type: "json" };
import pkg from "lodash";
const { cloneDeep } = pkg;

class ProductContent {
  static getDataList() {
    const { list } = productsData;
    return cloneDeep(list);
  }
}

export default ProductContent;
