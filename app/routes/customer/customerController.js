import Helper from "./../../helper/Helper.js";
import CustomerService from "../../services/customer/CustomerService.js";
import customersContent from "../../data/query/customers.json" assert { type: "json" };

class CustomerController {
  // static async getList(req, res, next) {
  //   const { data } = req.body;
  //   const filters = Helper.findFilter(data);
  //   const filter = Helper.buildFilterAll(filters);
  //   CustomerService.selectAll(filter)
  //     .then((result) => {
  //       res.json(result);
  //     })
  //     .catch(next);
  // }

  static async getList(req, res, next) {
    //const { data } = req.body;
    const { customers } = customersContent;
    CustomerService.selectAll(customers)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }
}

export default CustomerController;
