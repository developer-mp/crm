import Express from "express";
import AuthController from "./authController.js";

const authRouter = Express.Router();

authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);
authRouter.post("/logout", AuthController.logout);
// authRouter.post("/verifyemail/:verificationCode", AuthController.verifyEmail);

export default authRouter;
