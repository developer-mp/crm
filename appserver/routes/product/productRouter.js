import Express from "express";
import ProductController from "./productController.js";

const productRouter = Express.Router();

productRouter.post("/", ProductController.getProducts);
productRouter.post("/documentation", ProductController.getDocumentation);

export default productRouter;
