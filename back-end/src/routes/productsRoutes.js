import express  from "express";
import ProductController from "../controllers/productController.js";
import pager from "../middleware/pager.js";



const routes = express.Router();

routes.get("/products", ProductController.getAll, pager);
routes.get("/products/search", ProductController.getByFilter, pager);
routes.get("/products/:id", ProductController.getById);
routes.post("/products", ProductController.post);
routes.put("/products/:id", ProductController.put);
routes.delete("/products/:id", ProductController.delete);

export default routes;