import Helper from "./../../helper/Helper.js";
import ApiService from "../../utilities/api/ApiService.js";

class CustomerService {
  static async getCustomers(filters = []) {
    // const token = await this.token()
    const data = await this.CustomerList(token);
    CustomerTransform.applyCustomerTransform(data);
    return Helper.applyFilter(data, filters);
  }

  //   static async CustomerList(token)
  static async CustomerList() {
    const request = { Report: "ManageCustomer", Request: { IsValid: false } };
    const response = await ApiService.bearerCall(token, request);
    const { Object } = response;
    const data = Object.Object.Records;
    return data;
  }
}

export default CustomerService;
