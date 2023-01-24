import Express from "express";
import HealthController from "./healthController.js";

const healthRouter = Express.Router();

healthRouter.post("/", HealthController.getTestItem);

export default healthRouter;
