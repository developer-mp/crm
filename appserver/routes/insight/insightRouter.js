import Express from "express";
import InsightController from "./insightController.js";

const insightRouter = Express.Router();

insightRouter.post("/report", InsightController.getReports);

export default insightRouter;
