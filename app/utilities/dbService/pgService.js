//import logger from "./../../logger/winston.js";
import pool from "../../db.js";

class pgService {
  static query(rs) {
    // const result = await pool.query(rs.text);
    // return { record: result.rows, count: result.rowCount };

    return new Promise((resolve, reject) => {
      pool.query(rs.text, (err, result) => {
        if (err) {
          //logger.error(err);
          reject(new Error("Postgres error..."));
        }
        resolve({ record: result.rows, count: result.rowCount });
      });
    });
  }

  static prepareSelectAll(content) {
    const { select, table, schema } = content;
    const { column } = select;
    const text = `select ${column} from ${schema}.${table}`;
    return { text };
  }
}
export default pgService;
