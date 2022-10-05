import authRouter from "./auth/authRouter.js";

class AppServerRouter {
  static setRouter(app) {
    app.use("/auth", authRouter);
  }
}

export default AppServerRouter;
