import SQL from "../../utilities/sql/sql.js";
import customersQuery from "../../data/query/customer/customers.json" assert { type: "json" };
import campaignsQuery from "../../data/query/customer/campaigns.json" assert { type: "json" };

class CustomerController {
  static async getCustomers(req, res, next) {
    const value = null;
    const { customers } = customersQuery;
    const query = customers;
    SQL.selectQuery(value, query)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static async getCampaignMarketing(req, res, next) {
    const value = "Marketing";
    const { campaigns } = campaignsQuery;
    const query = campaigns;
    SQL.selectQuery(value, query)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static async getCampaignAd(req, res, next) {
    const value = "Advertising";
    const { campaigns } = campaignsQuery;
    const query = campaigns;
    SQL.selectQuery(value, query)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static async getCampaignLoyalty(req, res, next) {
    const value = "Loyalty programs";
    const { campaigns } = campaignsQuery;
    const query = campaigns;
    SQL.selectQuery(value, query)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }
}

export default CustomerController;
