import Express from "express";
import ContentController from "./contentController.js";

const contentRouter = Express.Router();

contentRouter.get("/", ContentController.filterType);
contentRouter.post("/filtertype", ContentController.filterType);
authRouter.post("/detail", ContentController.detail);

export default contentRouter;
