import Express from "express";
import CustomerController from "./customerController.js";

const customerRouter = Express.Router();

customerRouter.post("/", CustomerController.getCustomers);
customerRouter.post(
  "/campaign/marketing",
  CustomerController.getCampaignMarketing
);
customerRouter.post("/campaign/ad", CustomerController.getCampaignAd);
customerRouter.post("/campaign/loyalty", CustomerController.getCampaignLoyalty);

export default customerRouter;
