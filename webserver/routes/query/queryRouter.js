import Express from "express";
import QueryController from "./queryController.js";

const queryRouter = Express.Router();

queryRouter.post("/result", QueryController.queryResult);
queryRouter.post("/detail", QueryController.queryDetail);
// queryRouter.post("/update", QueryController.queryUpdate);
// queryRouter.post("/delete", QueryController.queryDelete);
// queryRouter.post("/token", QueryController.querytoken);
// queryRouter.post("/refresh", QueryController.queryRefresh);

export default queryRouter;
