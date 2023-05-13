import pool from "../../db.js";

const sqlSelectUnverifiedUsers =
  "SELECT email FROM users WHERE verified = false AND createdat < $1";
const unverifiedUsers = await pool.query(sqlSelectUnverifiedUsers, [
  new Date(Date.now() - 60 * 60 * 1000),
  // 3 * 24 * 60 * 60 * 1000),
]);

for (const user of unverifiedUsers.rows) {
  const sqlDeleteUser = "DELETE FROM users WHERE email = $1";
  await pool.query(sqlDeleteUser, [user.email]);
}
