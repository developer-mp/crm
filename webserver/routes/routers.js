import authRouter from "./auth/authRouter.js";
import userRouter from "./user/userRouter.js";
import searchRouter from "./search/searchRouter.js";
import healthRouter from "./health/healthRouter.js";
// import contentRouter from "./content/contentRouter.js";
import queryRouter from "./query/queryRouter.js";
// import entityRouter from "./entity/entityRouter.js";
// import adminRouter from "./admin/adminRouter.js";

class WebServerRouter {
  static setRouter(app) {
    app.use("/api/auth", authRouter);
    app.use("/api/health", healthRouter);
    app.use("/api/user", userRouter);
    app.use("/api/search", searchRouter);
    // app.use("/api/content", contentRouter);
    app.use("/api/query", queryRouter);
    // app.use("/api/entity", entityRouter);
    // app.use("/api/admin", adminRouter);
  }
}

export default WebServerRouter;
