import SQL from "../../utilities/sql/sql.js";
import productsQuery from "../../data/query/product/products.json" assert { type: "json" };
import documentationQuery from "../../data/query/product/documentation.json" assert { type: "json" };

class ProductController {
  static async getProducts(req, res, next) {
    const value = null;
    const { products } = productsQuery;
    const query = products;
    SQL.selectQuery(value, query)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static async getDocumentation(req, res, next) {
    const value = "Product";
    const { documentation } = documentationQuery;
    const query = documentation;
    SQL.selectQuery(value, query)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }
}

export default ProductController;
