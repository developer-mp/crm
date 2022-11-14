import ApiService from "../app/apiService.js";

class AuthService {
  static registerUserService(firstName, lastName, email, password) {
    // return ApiService.noSecureCall
    return ApiService.noSecureCall("auth/register", {
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
    return await ApiService.noSecureCall("auth/login", {
      email,
      password,
    });
  }

  static async logoutUserService() {
    // return await ApiService.noSecureCall
    return await ApiService.noSecureCall("auth/logout", {});
  }
}

export default AuthService;
