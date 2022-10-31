const express = require("express");
const HealthController = require("./healthController");

const healthRouter = express.Router();

healthRouter.get("/", HealthController.getTestItem);

export default healthRouter;
