import Express from "express";
import UserController from "./userController.js";

const userRouter = Express.Router();

userRouter.post("/", UserController.getUserMenu);
// userRouter.post("/changepassword", UserController.changePassword);
// userRouter.post("/getchallenge", UserController.getChallenge);
// userRouter.post("/answerchallenge", UserController.answerChallenge);
// userRouter.post("/getsecurityquestion", UserController.getSecurityQuestion);
// userRouter.post("/securityanswer", UserController.securityAnswer);
// userRouter.post("/updateuser", UserController.updateUser);
// userRouter.post("/users", UserController.getAllUsers);
// userRouter.post("/getuser", UserController.getUser);

export default userRouter;
