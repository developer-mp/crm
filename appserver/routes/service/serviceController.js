import SQL from "../../utilities/sql/sql.js";
import servicesQuery from "../../data/query/service/services.json" assert { type: "json" };
import documentationQuery from "../../data/query/service/documentation.json" assert { type: "json" };

class ServiceController {
  static async getServices(req, res, next) {
    const value = null;
    const { services } = servicesQuery;
    const query = services;
    SQL.selectQuery(value, query)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static async getDocumentation(req, res, next) {
    const value = "Service";
    const { documentation } = documentationQuery;
    const query = documentation;
    SQL.selectQuery(value, query)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }
}

export default ServiceController;
