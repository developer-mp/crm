import SQL from "../../utilities/sql/sql.js";
import insightsQuery from "../../data/query/insight/insights.json" assert { type: "json" };

class InsightController {
  static async getReports(req, res, next) {
    const value = null;
    const { insights } = insightsQuery;
    const query = insights;
    SQL.selectQuery(value, query)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }
}

export default InsightController;
