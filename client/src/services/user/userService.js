import ApiService from "../app/apiService.js";
import { ApiServiceNoSecureCall } from "../app/apiService.js";
import SessionService from "../app/sessionService.js";

class UserService {
  static getUserMenu() {
    // return ApiService.secureCall("user", {});
    // return ApiService.noSecureCall
    return ApiServiceNoSecureCall("user", {}).then((json) => json.data);
  }

  static storeToken(token) {
    SessionService.storeToken(token);
  }
}

export default UserService;
