import pgService from "../dbService/pgService.js";

class SQL {
  static selectAll() {
    const rs = pgService.prepareSelectAll(Masters);
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
