import pgService from "../dbService/pgService.js";

class SQL {
  static async selectQuery(value, query) {
    const rs = pgService.prepareSelect(query);
    const response = await pgService.executeQuery(rs, value);
    return response;
  }
}

export default SQL;
