import authRouter from "./auth/authRouter.js";
import userRouter from "./user/userRouter.js";

class WebServerRouter {
  static setRouter(app) {
    app.use("/api/auth", authRouter);
    app.use("/api/user", userRouter);
  }
}

export default WebServerRouter;
