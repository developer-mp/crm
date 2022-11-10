import pgService from "../dbService/pgService.js";
import customers from "../../data/query/customers.json" assert { type: "json" };

class SQL {
  static selectAll() {
    const rs = pgService.prepareSelectAll(customers);
    return pgService.query(rs).then((response) => {
      const { record } = response;
      // _.forEach(record, (item)=>{
      //     this.recordDecrypt(item,decrPwd);
      // }
      return record;
    });
  }
}

export default SQL;
