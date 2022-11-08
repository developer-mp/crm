import Helper from "./../../helper/Helper";

class CustomerController {
  static async getList(req, res, next) {
    const { data } = req.body;
    const filters = Helper.findfilter(data);
    const filter = Helper.buildFilterAll(filters);
    CustomerService.getCustomers(filter)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }
}

export default CustomerController;
