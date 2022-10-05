import AuthService from "../../services/auth/authService.js";

class UserController {
  static getUserMenu(req, res) {
    const menu = AuthService.userMenu(req.user);
    res.json(menu);
  }
}

export default UserController;
