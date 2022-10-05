import pool from "../../db";

class CustomerController {
  static async addCustomer(req: any, res: any) {
    try {
      const { name, country, category, website, db, username, password } =
        req.body;
      const addCustomer = await pool.query(
        "INSERT INTO customers (name, country, category, website, db, username, password) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [name, country, category, website, db, username, password]
      );
      res.json(addCustomer.rows[0]);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  static async getAllCustomers(req: any, res: any) {
    try {
      const getAllCustomers = await pool.query("SELECT * FROM customers");
      res.json(getAllCustomers.rows);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  static async getCustomer(req: any, res: any) {
    try {
      const { id } = req.params;
      const getCustomer = await pool.query(
        "SELECT * FROM customers WHERE id=$1",
        [id]
      );
      res.json(getCustomer.rows[0]);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  static async updateCustomer(req: any, res: any) {
    try {
      const { id } = req.params;
      const { name, country, category, website, db, username, password } =
        req.body;
      const updateCustomer = await pool.query(
        "UPDATE customers SET name=$1, country=$2, category=$3, website=$4, db=$5, username=$6, password=$7 WHERE id=$8 RETURNING *",
        [name, country, category, website, db, username, password, id]
      );
      res.json(updateCustomer.rows[0]);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  static async deleteCustomer(req: any, res: any) {
    try {
      const { id } = req.params;
      const deleteCustomer = await pool.query(
        "DELETE FROM customers WHERE id=$1",
        [id]
      );
      res.json("Record has been deleted");
    } catch (err: any) {
      console.log(err.message);
    }
  }
}

export default CustomerController;
