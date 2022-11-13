import authRouter from "./auth/authRouter.js";
import customerRouter from "./customer/customerRouter.js";
import healthRouter from "./health/healthRouter.js";

class AppServerRouter {
  static setRouter(app) {
    app.use("/health", healthRouter);
    app.use("/auth", authRouter);
    app.use("/customer", customerRouter);
  }
}

export default AppServerRouter;
