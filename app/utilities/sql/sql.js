import pgService from "../dbService/pgService.js";
import customersData from "../../data/query/customers.json" assert { type: "json" };

class SQL {
  static async selectAll() {
    const { customers } = customersData;
    const rs = pgService.prepareSelectAll(customers);
    const response = await pgService.query(rs);
    const { record } = response;
    return record;
  }
}

export default SQL;
