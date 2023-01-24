//import logger from "./../../logger/winston.js";
import pool from "../../db.js";

class pgService {
  static prepareSelect(query) {
    const { select, table, schema } = query;
    const { column, where } = select;
    let text;
    if (where) {
      text = `SELECT ${column} FROM ${schema}.${table} WHERE ${where}`;
    } else {
      text = `SELECT ${column} FROM ${schema}.${table}`;
    }
    return { text };
  }

  static executeQuery(rs, value) {
    if (value) {
      return new Promise((resolve, reject) => {
        pool.query(rs.text, [value], (err, result) => {
          if (err) {
            //logger.error(err);
            reject(new Error("Postgres error..."));
          }
          resolve({ record: result.rows, count: result.rowCount });
        });
      });
    } else {
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
  }
}
export default pgService;
