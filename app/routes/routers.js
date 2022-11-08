import authRouter from "./auth/authRouter.js";
import customerRouter from "./customer/customerRouter.js";

class AppServerRouter {
  static setRouter(app) {
    app.use("/auth", authRouter);
    app.use("/customer", customerRouter);
  }
}

export default AppServerRouter;
