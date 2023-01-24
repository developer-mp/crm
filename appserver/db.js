import pg from "pg";

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: "admin",
  password: "admin",
  database: "console",
});

export default pool;
