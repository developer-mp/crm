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

// import SessionService from "./../app/sessionService.js";
// import ApiService from "./../app/apiService.js";

// class UserService {
//   static storeToken(token, expirationTime, firstName, lastName, email, role) {
//     SessionService.storeToken(
//       token,
//       expirationTime,
//       firstName,
//       lastName,
//       email,
//       role
//     );
//   }

//   static getFirstName() {
//     return SessionService.getFirstName() || "User";
//   }

//   static getLastName() {
//     return SessionService.getLastName() || "";
//   }

//   static getEmail() {
//     return SessionService.getEmail() || "";
//   }

//   static getRole() {
//     return SessionService.getRole() || "";
//   }

//   static login(username, password) {
//     return ApiService.noSecureCall("auth", { username, password });
//   }

//   static logoff(forced) {
//     return ApiService.secureCall("auth/logoff")
//       .then(() => {
//         UserService.handleLogoff(forced);
//       })
//       .catch(() => {
//         UserService.handleLogoff(forced);
//       });
//   }

//   static handleLogoff(forced) {
//     if (forced) {
//       SessionService.setAsExpired();
//       window.location.reload();
//     } else {
//       UserService.removeToken();
//       window.location.replace("/");
//     }
//   }

//   static removeToken() {
//     SessionService.removeToken();
//   }

//   static updateExpiration(newTime) {
//     SessionService.updateExpiration(newTime);
//   }

//   static getUserMenu() {
//     ApiService.secureCall("user", {});
//   }

//   static changePassword(oldpassword, password) {
//     return ApiService.secureCall("user/changepassword", {
//       oldpassword,
//       password,
//     });
//   }

//   static setPasswordChanged(bool) {
//     SessionService.setPasswordChanged(bool);
//   }

//   static getChallengeQuestion(username) {
//     return ApiService.noSecureCall("user/getchallenge", { username });
//   }

//   static sendPasswordChallenge(username, challengeId, answer) {
//     return ApiService.noSecureCall("user/answechallenge", {
//       username,
//       challengeId,
//       answer,
//     });
//   }

//   static setTemporaryPasswordSent(value) {
//     SessionService.setTemporaryPasswordSent(value);
//   }

//   static getSecurityQuestions() {
//     return ApiService.secureCall("user/getsecurityquestion", {});
//   }

//   static sendSecurityQuestions(question) {
//     const formattedQuestions = {};
//     formattedQuestions.forEach((question, idx) => {
//       formattedQuestions[`answer${idx + 1}`] = {
//         code: question.code,
//         text: question.answer,
//       };
//     });
//     return ApiService.secureCall("user/securityanswer", formattedQuestions);
//   }

//   static setSecurityQuestionsUpdated(value) {
//     SessionService.setSecurityQuestionsUpdated(value);
//   }

//   static saveUser(user) {
//     const userDetail = {
//       id: user.id || 0,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       email: user.email,
//       securityRole: user.securityRole,
//       password: user.userId,
//       isactive: user.isactive === "Yes",
//     };
//     return ApiService.secureCall("user/updateuser", { userDetail });
//   }

//   static getAllUsers() {
//     return ApiService.secureCall("user/users");
//   }

//   static getUser(userId) {
//     return ApiService.secureCall("user/getuser", { PK: userId });
//   }

//   static checkUserRole() {
//     const role = UserService.getRole();
//     let roles = new Array();
//     roles = role.split(";");
//     return roles;
//   }

//   static isUserAdminLevel(product) {
//     if (this.checkUserRole().includes("Admin")) {
//       return true;
//     }
//     const userRole = `${product} Admin`;
//     if (this.checkUserRole().includes(userRole)) {
//       return true;
//     }
//     return false;
//   }

//   static isUserPowerLevel(product) {
//     const admin = this.isUserAdminLevel(product);
//     if (admin) return true;

//     const userRole = `${product} Power User`;
//     if (this.checkUserRole().includes(userRole)) {
//       return true;
//     }
//     return false;
//   }
// }

// export default UserService;
