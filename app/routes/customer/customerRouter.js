import Express from "express";
import CustomerController from "./customerController.js";

const customerRouter = Express.Router();

customerRouter.post("/", CustomerController.getList);
// customerRouter.post("/load", CustomerController.getList);

export default customerRouter;
