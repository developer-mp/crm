import healthRouter from "./health/healthRouter.js";
import authRouter from "./auth/authRouter.js";
import customerRouter from "./customer/customerRouter.js";
import productRouter from "./product/productRouter.js";
import serviceRouter from "./service/serviceRouter.js";
import projectRouter from "./project/projectRouter.js";
import insightRouter from "./insight/insightRouter.js";
import contactRouter from "./contact/contactRouter.js";

class AppServerRouter {
  static setRouter(app) {
    app.use("/health", healthRouter);
    app.use("/auth", authRouter);
    app.use("/customer", customerRouter);
    app.use("/product", productRouter);
    app.use("/service", serviceRouter);
    app.use("/project", projectRouter);
    app.use("/insight", insightRouter);
    app.use("/contact", contactRouter);
  }
}

export default AppServerRouter;
