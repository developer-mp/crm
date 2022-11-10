//import { Client } from "pg";
import configInfo from "../common/configInfo.js";
import pkg from "pg";
const { Client } = pkg;
//import logger from "./../../logger/winston.js";
import pool from "../../db.js";

class pgService {
  static async query(rs) {
    //const sqlSelectUser = "SELECT * FROM users";
    const isUserExist = await pool.query(rs);
    return isUserExist;

    // const conn = configInfo.pgConnection();
    // return new Promise((resolve, reject) => {
    //   const client = new Client(conn);
    //   client.connect();
    //   client.query(rs.text, (err, result) => {
    //     if (err) {
    //       client.end();
    //       //logger.error(err);
    //       reject(new Error("Postgres error..."));
    //     }
    //     client.end();
    //     resolve({ record: result.rows, count: result.rowCount });
    //   });
    // });
  }

  static prepareSelectAll(content) {
    const { select, table, schema } = content;
    const column = select;
    const text = `select ${column} from ${schema}.${table}`;
    return { text };
  }
}
export default pgService;
