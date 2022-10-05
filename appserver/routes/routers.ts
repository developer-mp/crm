import customerRouter from "./customer/customerRouter";

class AppRouter {
  static setRouter(app: any) {
    app.use("/customer", customerRouter);
  }
}

export default AppRouter;
