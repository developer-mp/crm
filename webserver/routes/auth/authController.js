import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import AuthService from "../../services/auth/authService.js";
import axios from "axios";
axios.defaults.withCredentials = true;

//import validateToken from "../../utils/auth/validateToken.js";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

class AuthController {
  static async register(req, res) {
    const { firstName, lastName, email, password } = req.body;
    try {
      await AuthService.registerUserService(
        firstName,
        lastName,
        email,
        password
      ).then(() => {
        res.status(200).json({
          message: "Registered successfully",
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error has occured" });
    }
  }

  static async verifyEmail(req, res) {
    const verificationCode = req.params.verificationcode;
    try {
      await AuthService.verifyEmailUserService(verificationCode).then(() => {
        res.status(200).json({
          message: "Email has been verified successfully",
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error has occured" });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;
    const cookies = req.cookies;
    const payLoad = {
      email: req.email,
    };
    const accessToken = jwt.sign(payLoad, ACCESS_TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "30s",
    });
    const refreshToken = jwt.sign(payLoad, REFRESH_TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "1d",
    });
    if (cookies?.refreshToken) {
      res.clearCookie("refreshToken");
    }
    try {
      const response = await AuthService.loginUserService(email, password);
      const { firstname, lastname, verified } = response;
      res
        .cookie("refreshToken", refreshToken, {
          sameSite: "Lax",
          maxAge: 24 * 60 * 60 * 1000,
          httpOnly: true,
        })
        .status(200)
        .json({
          message: "LoggedIn successfully",
          accessToken: accessToken,
          refreshToken: refreshToken,
          firstName: firstname,
          lastName: lastname,
          verified: verified,
        });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error" });
    }
  }

  // static async login(req, res) {
  //   const { email, password } = req.body;
  //   try {
  //     await AuthService.loginUser(email, password).then((accessToken) => {
  //       return res.json(accessToken);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(400).json({ message: "Error" });
  //   }
  // }

  // static async verifyEmail(req, res) {
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(400).json({ message: "Error" });
  //   }
  // }

  static async logout(req, res) {
    const cookies = req.cookies;
    if (!cookies?.refreshToken) {
      return res.status(400).json({
        message: "Refresh token has expired",
      });
    }
    try {
      await res.clearCookie("refreshToken").status(200).json({
        message: "LoggedOut successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error" });
    }
  }
}

export default AuthController;
