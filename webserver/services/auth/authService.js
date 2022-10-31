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

  static async verifyEmailUserService(verificationCode) {
    return await ApiService.apiCall(`auth/verifyemail/${verificationCode}`, {});
  }

  static async loginUserService(email, password) {
    return await ApiService.apiCall("auth/login", { email, password });
  }

  // static async authenticateUser(username, password) {
  //   const request = { data: { email: username, password } };
  //   const endpoint = "auth";
  //   const result_3 = await ApiService.apiCall(endpoint, request);
  //   const expiration = new Date();
  //   expiration.setHours(23, 59, 59, 0);
  //   const expirationTime = expiration.getTime() / 1000;
  //   const { user } = result_3;
  //   const { code, userrole, role } = user;
  //   const userCode = menus.UserCode(code);
  //   const entities = SearchEntity.createEntityId(userCode, userrole);
  //   user.entities = entities;
  //   const isAdmin = menus.isAdminPresent(userrole);
  //   const admin = isAdmin ? "admin" : "user";
  //   const firstName = user.firstName;
  //   const lastName = user.lastName;
  //   const { key } = userCode;
  //   const payload = {
  //     role: admin,
  //     exp: expirationTime,
  //     user,
  //     entities,
  //     code,
  //     privs: user.userrole,
  //   };
  //   const options = { subject: username };
  //   const token = jwt.sign(payload, config.auth.jwtSecret, options);
  //   return {
  //     token,
  //     expirationTime,
  //     firstName,
  //     lastName,
  //     key,
  //     email,
  //     username,
  //     role,
  //   };
  // }

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
    // const userCode = menus.userCode(user.code);
    // const data = menus.getMenu(userCode);
    let dashboard = menus.getDashboard();
    // const {role, privs} = user;

    // if (role !== "admin") {
    //   const item = _.find(data, {title: "Admin"});
    //   _.pull(data, item);
    // }

    // const { restricted, key } = userCode;
    // if (restricted) {
    //   dashboard = _.filter(dashboard, obj => obj.role.includes(key));
    // } else {
    //   dashboard = _.filter(dashboard, obj => menus.availableDashboard(obj, privs) && obj.role.includes(key));
    // }
    // const userMenu = { data, dashboard };
    // return { userMenu };
    let menu = menus.getMenu();
    const userMenu = { dashboard, menu };
    return { userMenu };
  }

  // static async changePassword(params) {
  //   const { user, oldpassword, password } = params;
  //   const record = {
  //     id: user.id,
  //     email: user.email,
  //     password,
  //   };
  //   const data = { data: record };
  //   const endpoint = "user/update";
  //   const response = await ApiService.apiCall(endpoint, data);
  //   return {
  //     message: response.status.message,
  //   };
  // }

  // static async getChallenge(username) {
  //   const request = { data: { emaik: username } };
  //   const endpoint = "user/question";
  //   const response = await ApiService.apiCall(endpoint, request);
  //   return {
  //     challengeId: response.result.question,
  //     challengeQuestion: response.result.question,
  //   };
  // }

  // static async answerChallenge(params) {
  //   const { username, challengeId, answer } = params;
  //   const request = {
  //     data: { email: username, question: challengeId, answer },
  //   };
  //   const endpoint = "user/resetpassword";
  //   const response = await ApiService.apiCall(endpoint, request);
  //   return {
  //     message: response.status.message,
  //   };
  // }

  // static getSecurityQuestion() {
  //   const data = menus.getSecurityQuestion();
  //   return { data };
  // }

  // static async securityAnswer(params) {
  //   const { user, answer } = params;
  //   const record = {
  //     id: user.id,
  //     email: user.email,
  //     securityquestion: menus.getSecurityQuestionText(answer.code),
  //     securityanswer: answer.text,
  //   };
  //   const data = { data: record };
  //   const endpoint = "user/update";
  //   const response = await ApiService.apiCall(endpoint, data);
  //   return {
  //     message: response.status.message,
  //   };
  // }

  // static async addUser(request) {
  //   const { userDetail } = request;
  //   const userDetails = SearchEntityResult.getUserDetail(userDetail);
  //   const data = { data: userDetails };
  //   const endpoint = "user/add";
  //   const response = await ApiService.apiCall(endpoint, data);
  //   const { session } = response;
  //   const { message } = session;
  //   if (message === "inserted") {
  //     return { message: "Success", userDetail };
  //   }
  //   return { message: message, userDetail };
  // }

  // static async updateUser(request) {
  //   const { user, userDetail } = request;
  //   const userDetails = SearchEntityResult.getUserDetail(userDetail, true);
  //   const endpoint = "user/update";
  //   const response = await ApiService.apiCall(endpoint, { data: userDetails });
  //   const { session } = response;
  //   const { message } = session;
  //   userDetail.isActive = userDetail.isActive ? "Yes" : "No";
  //   return { message, userDetail };
  // }

  // static async getUsers(request) {
  //   const endpoint = "user";
  //   const { user } = request;
  //   const { privs } = user;
  //   const response = await ApiService.apiCall(endpoint);
  //   const { result } = response;
  //   const { data } = result;
  //   const filtered = _.filter(data, (record) =>
  //     SearchEntityResult.availableUser(record, privs)
  //   );
  //   const list = _.map(filtered, (item) =>
  //     SearchEntityResult.getUserInfo(item)
  //   );
  //   const cnt = list.length;
  //   return { list, records: cnt };
  // }

  // static async getUser(request) {
  //   const { user, PK } = request;
  //   const users = await this.getUsers({ user });
  //   const record = _.find(users.list, { id: parseInt(PK) });
  //   const rst = { userDetail: record, message: "Found" };
  //   return rst;
  // }
}

export default AuthService;
