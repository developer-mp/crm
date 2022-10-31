const express = require("express");
const EntityController = require("./entityController");

const entityRouter = express.Router();

entityRouter.post("/add", EntityController.getEntityForAdd);
entityRouter.post("/update", EntityController.getEntityForUpdate);

export default entityRouter;
