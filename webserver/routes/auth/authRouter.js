import Express from "express";
import AuthController from "./authController.js";

const authRouter = Express.Router();

authRouter.post("/register", AuthController.register);
authRouter.post("/verifyemail/:verificationcode", AuthController.verifyEmail);
authRouter.post("/login", AuthController.login);
authRouter.post("/forgot", AuthController.forgotPassword);
authRouter.post("/reset", AuthController.resetPassword);
authRouter.post("/logout", AuthController.logout);

export default authRouter;
