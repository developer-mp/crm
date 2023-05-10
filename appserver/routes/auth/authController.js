import pool from "../../db.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();
import AuthService from "../../services/auth/authService.js";

const CLIENT_URL = process.env.CLIENT_URL;

class AuthController {
  static async register(req, res) {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password)
      return res.status(400).json({ message: "Please fill out all fields" });
    const sqlSelectUser = "SELECT email FROM users WHERE email = $1";
    const isUserExist = await pool.query(sqlSelectUser, [email]);
    try {
      if (isUserExist.rowCount === 0) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const verificationCode = crypto.randomBytes(32).toString("hex");
        const hashedVerificationCode = crypto
          .createHash("sha256")
          .update(verificationCode)
          .digest("hex");
        const role = "user";
        const sqlInsertUser =
          "INSERT INTO users (firstName, lastName, email, password, role, verificationcode) values ($1, $2, $3, $4, $5, $6)";
        await pool.query(sqlInsertUser, [
          firstName,
          lastName,
          email,
          hashedPassword,
          role,
          hashedVerificationCode,
        ]);
        const url = `${CLIENT_URL}/verifyemail/${verificationCode}`;
        try {
          if (verificationCode) {
            await AuthService.sendVerificationEmail(
              firstName,
              lastName,
              email,
              url
            );
            return res.status(200).json({
              message: "Email with a verification code has been sent",
            });
          } else
            return res.status(400).json({
              message: "Error has occured while sending a verification email",
            });
        } catch (error) {
          console.log(error);
        }
        return res
          .status(200)
          .json({ message: `New user ${email} has been created` });
      } else return res.status(400).json({ message: "User already exists" });
    } catch (error) {
      console.log(error);
    }
  }

  static async verifyEmail(req, res) {
    try {
      const verificationCode = crypto
        .createHash("sha256")
        .update(req.params.verificationcode)
        .digest("hex");
      const sqlSelectVerificationCode =
        "SELECT verificationcode FROM users WHERE verificationcode = $1";
      const isVerificationCodeExist = await pool.query(
        sqlSelectVerificationCode,
        [verificationCode]
      );
      if (isVerificationCodeExist.rowCount === 0) {
        return res
          .status(400)
          .json({ message: "Verification code is not found" });
      } else {
        const verified = true;
        const sqlUpdateVerifiedUser =
          "UPDATE users SET verified = $1 WHERE verificationcode = $2";
        await pool.query(sqlUpdateVerifiedUser, [verified, verificationCode]);
        return res.status(200).json({
          message: "Email has been verified successfully",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const sqlSelectAll = "SELECT * FROM users WHERE email = $1";
      const isUserSelect = await pool.query(sqlSelectAll, [email]);
      if (isUserSelect.rowCount === 0)
        return res.status(400).json({ message: "Email is not found" });
      else {
        const user = isUserSelect.rows[0];
        const hashedPassword = isUserSelect.rows[0].password;
        const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
        if (!isPasswordMatch) {
          return res.status(400).json({ message: "Incorrect password" });
        } else {
          const { firstname, lastname, verified } = user;
          return res.status(200).json({
            firstname,
            lastname,
            message: "Credentials are correct",
            verified,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  // static async token(req, res) {
  //   const cookies = req.cookies;
  //   if (!cookies?.jwt) return res.send({ error: "User not authorized" });
  //   const refreshToken = cookies.jwt;
  //   res.clearCookie("jwt", { httpOnly: true, sameSite: "Lax" });
  //   //const user = await validateToken(token, REFRESH_TOKEN_SECRET);
  //   const sqlSelectRefreshToken = "SELECT * FROM users WHERE token = $1";
  //   // if (user === null) {
  //   //   res.sendStatus(403);
  //   //   return;
  //   // }
  //   const isUserExist = await pool.query(sqlSelectRefreshToken, [refreshToken]);

  //   if (isUserExist.rowCount === 0) {
  //     jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, async (err, decoded) => {
  //       if (err) return res.send({ error: "Forbidden" });
  //       const sqlSelectHackedUser = "SELECT * FROM users WHERE username = $1";
  //       const hackedUser = await pool.query(sqlSelectHackedUser, [
  //         decoded.username,
  //       ]);
  //       let hackedUserRefreshToken = null;
  //       await pool.query(
  //         "UPDATE users SET refreshtoken = $1 WHERE username = $2",
  //         [hackedUserRefreshToken, hackedUser]
  //       );
  //     });
  //     return res.send({ error: "Forbidden" });
  //   }

  //   const newRefreshTokenArray = isUserExist.rows[0].refreshtoken.filter(
  //     (rt) => rt !== refreshToken
  //   );

  //   jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, async (err, decoded) => {
  //     if (err) {
  //       let refreshToken = [...newRefreshTokenArray];
  //       await pool.query(
  //         "UPDATE users SET refreshtoken = $1 WHERE username = $2",
  //         [refreshToken, isUserExist.rows[0]]
  //       );
  //     }
  //     if (err || isUserExist.rows[0].username !== decoded.username)
  //       return res.send({ error: "Forbidden" });

  //     const payLoad = { username: isUserExist.rows[0].username };
  //     const newAccessToken = jwt.sign(payLoad, ACCESS_TOKEN_SECRET, {
  //       algorithm: "HS256",
  //       expiresIn: "30s",
  //     });
  //     const newRefreshToken = jwt.sign(payLoad, REFRESH_TOKEN_SECRET, {
  //       algorithm: "HS256",
  //       expiresIn: "15s",
  //     });

  //     let refreshToken = [...newRefreshTokenArray, newRefreshToken];
  //     await pool.query(
  //       "UPDATE users SET refreshtoken = $1 WHERE username = $2",
  //       [refreshToken, isUserExist.rows[0]]
  //     );

  //     res.cookie("jwt", newRefreshToken, {
  //       httpOnly: true,
  //       sameSite: "Lax",
  //       maxAge: 24 * 60 * 60 * 1000,
  //     });

  //     res.send({
  //       success: "Token refreshed successfully",
  //       accessToken: newAccessToken,
  //       refreshToken: newRefreshToken,
  //     });
  //   });
  // }

  // // static async token(req, res) {
  // //   const token = cookies.jwt;
  // //   const user = await validateToken(token, REFRESH_TOKEN_SECRET);
  // //   const sqlSelectRefreshToken = "SELECT * FROM users WHERE token = $1";
  // //   if (user === null) {
  // //     res.sendStatus(403);
  // //     return;
  // //   }
  // //   const result = await pool.query(sqlSelectRefreshToken, [token]);
  // //   if (result.rowCount == 0) res.sendStatus(403);
  // //   else {
  // //     const payLoad = { name: user.name };
  // //     const token = jwt.sign(payLoad, ACCESS_TOKEN_SECRET, {
  // //       algorithm: "HS256",
  // //       expiresIn: "30s",
  // //     });
  // //     res.setHeader("set-cookie", [
  // //       `JWT_TOKEN=${token}; httponly; samesite=lax`,
  // //     ]);
  // //     res.send({
  // //       message: "Refreshed successfully",
  // //     });
  // //   }
  // // }
}

export default AuthController;
