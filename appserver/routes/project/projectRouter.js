import Express from "express";
import ProjectController from "./projectController.js";

const projectRouter = Express.Router();

projectRouter.post("/", ProjectController.getProjects);

export default projectRouter;
