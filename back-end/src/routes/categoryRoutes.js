import express  from "express";
import CategoryController from "../controllers/categoryController.js";
import pager from "../middleware/pager.js";



const routes = express.Router();

routes.get("/categories", CategoryController.getAll, pager);
routes.get("/categories/search", CategoryController.getByFilter, pager);
routes.get("/categories/:id", CategoryController.getById);
routes.post("/categories", CategoryController.post);
routes.put("/categories/:id", CategoryController.put);
routes.delete("/categories/:id", CategoryController.delete);

export default routes;