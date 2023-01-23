import Express from "express";
import ResultController from "./resultController.js";

const resultRouter = Express.Router();

resultRouter.post("/", ResultController.getResult);

export default resultRouter;
