import Helper from "./../../helper/Helper.js";
import CustomerService from "../../services/customer/CustomerService.js";

class CustomerController {
  static async getList(req, res, next) {
    const { data } = req.body;
    const filters = Helper.findfilter(data);
    const filter = Helper.buildFilterAll(filters);
    CustomerService.selectAll(filter)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }
}

export default CustomerController;
