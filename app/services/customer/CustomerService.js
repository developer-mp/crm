import Helper from "./../../helper/Helper.js";
//import ApiService from "../../utilities/api/ApiService.js";
import SQL from "./../../utilities/sql/sql.js";

class CustomerService {
  // static async selectAll(filters = []) {
  //   return SQL.selectAll().then((response) => {
  //     return Helper.applyFilter(response, filters);
  //   });
  // }

  static async selectAll() {
    return SQL.selectAll();
  }

  //   static async CustomerList(token)
  // static async CustomerList() {
  //   const request = { Report: "ManageCustomer", Request: { IsValid: false } };
  //   const response = await ApiService.bearerCall(token, request);
  //   const { Object } = response;
  //   const data = Object.Object.Records;
  //   return data;
  // }
}

export default CustomerService;
