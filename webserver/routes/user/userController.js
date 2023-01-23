import AuthService from "../../services/auth/authService.js";
// import UserUtility from "../../utilities/user/userMenu.js";

class UserController {
  static getUserMenu(req, res) {
    const menu = AuthService.userMenu(req.user);
    res.json(menu);
  }

  // static changePassword(req, res, next) {
  //   const { oldPassword, password } = req.body;
  //   const { user } = req;
  //   const nospace = /^\S*$/;
  //   const nospecial = /`|~|#|\[|\]|{|}|&|\?|\/|\'|\||\"|;|<|>|@|%|,|\$/;
  //   const expression =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[(!*.=+:-_)])(?=.{8,})/;

  //   if (!expression.test(password)) {
  //     throw webError.ServerValidationError(10);
  //   }

  //   if (user.user.user_id === password) {
  //     throw webError.ServerValidationError(11);
  //   }

  //   if (oldPassword === password) {
  //     throw webError.ServerValidationError(12);
  //   }

  //   if (
  //     nospecial.test(oldPassword) ||
  //     nospecial.test(password) ||
  //     !nospace.test(oldPassword) ||
  //     !nospace.test(password)
  //   ) {
  //     throw webError.ServerValidationError(10);
  //   }

  //   const params = { user: user.user, oldPassword, password };
  //   AuthService.changePassword(params)
  //     .then((token) => {
  //       res.json({ changePassword: true, message: token.message });
  //     })
  //     .catch(next);
  // }

  // static getChallenge(req, res, next) {
  //   const { username } = req.body;
  //   AuthService.getChallenge(username)
  //     .then((challenge) => {
  //       res.json(challenge);
  //     })
  //     .catch(next);
  // }

  // static answerChallenge(req, res, next) {
  //   const { username, challengeId, answer } = req.body;
  //   const params = { username, challengeId, answer };
  //   AuthService.answerChallenge(params)
  //     .then((isCorrect) => {
  //       res.json(isCorrect);
  //     })
  //     .catch(next);
  // }

  // static getSecurityQuestion(req, res) {
  //   const securityQuestion = AuthService.getSecurityQuestion();
  //   res.json(securityQuestion);
  // }

  // static securityAnswer(req, res, next) {
  //   const { answer } = req.body;
  //   const { user } = req;
  //   if (answer.code === undefined) {
  //     throw webError.ServerValidationError(15);
  //   }
  //   if (answer.text === undefined) {
  //     throw webError.ServerValidationError(16);
  //   }

  //   const params = { user: user.user, answer: answer };
  //   AuthService.securityAnswer(params)
  //     .then((token) => {
  //       res.json({ securityAnswer: true, message: token.message });
  //     })
  //     .catch(next);
  // }

  // static updateUser(req, res, next) {
  //   const { user } = req;
  //   const { userDetail } = req.body;

  //   const params = { user: user.user, userDetail };

  //   if (userDetail.id === 0) {
  //     AuthService.addUser(params)
  //       .then((result) => {
  //         res.json(result);
  //       })
  //       .catch(next);
  //   } else {
  //     AuthService.updateUser(params)
  //       .then((result) => {
  //         res.json(result);
  //       })
  //       .catch(next);
  //   }
  // }

  // static getAllUsers(req, res, next) {
  //   const { user } = req;
  //   UserUtility.checkUserEndPointPermission(req.user);
  //   const params = { user };
  //   AuthService.getUsers(params)
  //     .then((result) => {
  //       res.json(result);
  //     })
  //     .catch(next);
  // }

  // static getUser(req, res, next) {
  //   const { user } = req;
  //   const { PK } = req.body;
  //   UserUtility.checkUserEndPointPermission(req.user);
  //   const params = { user, PK };
  //   AuthService.getUser(params)
  //     .then((result) => {
  //       res.json(result);
  //     })
  //     .catch(next);
  // }
}

export default UserController;
