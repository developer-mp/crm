import menus from "../../utilities/user/userMenu.js";
import ApiService from "../../utilities/api/apiService.js";
import jwt from "jsonwebtoken";
import axios from "axios";
axios.defaults.withCredentials = true;

class AuthService {
  static async registerUserService(firstName, lastName, email, password) {
    return await ApiService.apiCall("auth/register", {
      firstName,
      lastName,
      email,
      password,
    });
  }

  static async loginUserService(email, password) {
    return await ApiService.apiCall("auth/login", { email, password });
  }

  // static async loginUser(email, password) {
  //   const request = { data: { email, password } };
  //   const endpoint = "auth/login";

  //   try {
  //     await ApiService.apiCall(endpoint, request).then((res) => {
  //       const payLoad = {
  //         email: req.email,
  //       };
  //       const accessToken = jwt.sign(payLoad, ACCESS_TOKEN_SECRET, {
  //         algorithm: "HS256",
  //         expiresIn: "30s",
  //       });
  //       const refreshToken = jwt.sign(payLoad, REFRESH_TOKEN_SECRET, {
  //         algorithm: "HS256",
  //         expiresIn: "1d",
  //       });
  //       if (cookies?.refreshToken) {
  //         res.clearCookie("refreshToken");
  //       } else {
  //         res
  //           .cookie("refreshToken", refreshToken, {
  //             sameSite: "Lax",
  //             maxAge: 24 * 60 * 60 * 1000,
  //             httpOnly: true,
  //           })
  //           .status(200)
  //           .json({
  //             message: "LoggedIn successfully",
  //             // accessToken: accessToken,
  //             refreshToken: refreshToken,
  //           });
  //       }
  //       return accessToken;
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(400).json({ message: "Error" });
  //   }
  // }

  // static async logoutUser() {
  //   return await ApiService.apiCall("auth/logout", {});
  // }

  static userMenu(user) {
    let dashboard = menus.getDashboard();
    let menu = menus.getMenu();
    const userMenu = { dashboard, menu };
    return { userMenu };
  }
}

export default AuthService;
