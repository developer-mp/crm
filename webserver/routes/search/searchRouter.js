import Express from "express";
import SearchController from "./searchController.js";

const searchRouter = Express.Router();

searchRouter.post("/entities", SearchController.getEntity);

export default searchRouter;
