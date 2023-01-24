import Express from "express";
import ContactController from "./contactController.js";

const contactRouter = Express.Router();

contactRouter.post("/", ContactController.getContacts);

export default contactRouter;
