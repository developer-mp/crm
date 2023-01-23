import authRouter from "./auth/authRouter.js";
import userRouter from "./user/userRouter.js";
import searchRouter from "./search/searchRouter.js";
import healthRouter from "./health/healthRouter.js";
import resultRouter from "./result/resultRouter.js";

class WebServerRouter {
  static setRouter(app) {
    app.use("/api/auth", authRouter);
    app.use("/api/health", healthRouter);
    app.use("/api/user", userRouter);
    app.use("/api/search", searchRouter);
    app.use("/api/result", resultRouter);
  }
}

export default WebServerRouter;
