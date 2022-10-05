import express from "express";
import CustomerController from "./customerController";

const customerRouter = express.Router();

customerRouter.post("/add", CustomerController.addCustomer);
customerRouter.post("/", CustomerController.getAllCustomers);
customerRouter.post("/:id", CustomerController.getCustomer);
customerRouter.put("/:id", CustomerController.updateCustomer);
customerRouter.delete("/:id", CustomerController.deleteCustomer);

export default customerRouter;
