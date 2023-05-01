import Express from "express";
import AuthController from "./authController.js";

const authRouter = Express.Router();

authRouter.post("/register", AuthController.register);
authRouter.post("/verifyemail/:verificationcode", AuthController.verifyEmail);
authRouter.post("/login", AuthController.login);

export default authRouter;