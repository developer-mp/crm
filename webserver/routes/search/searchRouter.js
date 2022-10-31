import Express from "express";
import SearchController from "./searchController.js";

const searchRouter = Express.Router();

//searchRouter.post("/", SearchController.getQueryFilter);
searchRouter.post("/entities", SearchController.getEntityList);
searchRouter.post("/querylist", SearchController.getQueryList);
searchRouter.post("/queryfilter", SearchController.getQueryFilter);

export default searchRouter;
