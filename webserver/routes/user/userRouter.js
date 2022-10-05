import Express from "express";
import UserController from "./userController.js";

const userRouter = Express.Router();

userRouter.post("/", UserController.getUserMenu);

export default userRouter;
