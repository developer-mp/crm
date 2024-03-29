import Express from "express";
import HealthController from "./healthController.js";

const healthRouter = Express.Router();

healthRouter.get("/", HealthController.checkHealth);

export default healthRouter;
