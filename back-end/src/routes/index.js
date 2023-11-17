import express from "express";
import products from "./productsRoutes.js";
import category from "./categoryRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Route conect successefully!!!"));
  app.use(express.json(), products, category);
};
export default routes;