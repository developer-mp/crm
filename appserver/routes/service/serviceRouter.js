import Express from "express";
import ServiceController from "./serviceController.js";

const serviceRouter = Express.Router();

serviceRouter.post("/", ServiceController.getServices);
serviceRouter.post("/documentation", ServiceController.getDocumentation);

export default serviceRouter;
