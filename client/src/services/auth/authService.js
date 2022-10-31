//import ApiService from "../app/apiService.js";
import { ApiServiceNoSecureCall } from "../app/apiService.js";

class AuthService {
  static registerUserService(firstName, lastName, email, password) {
    // return ApiService.noSecureCall
    return ApiServiceNoSecureCall("auth/register", {
      firstName,
      lastName,
      email,
      password,
    });
  }

  // static verifyEmailUserService(verificationcode) {
  //   // return ApiService.noSecureCall
  //   return ApiServiceNoSecureCall(`auth/verifyemail/${verificationcode}`, {});
  // }

  static async loginUserService(email, password) {
    // return await ApiService.noSecureCall
    return await ApiServiceNoSecureCall("auth/login", {
      email,
      password,
    });
  }

  static async logoutUserService() {
    // return await ApiService.noSecureCall
    return await ApiServiceNoSecureCall("auth/logout", {});
  }
}

export default AuthService;
