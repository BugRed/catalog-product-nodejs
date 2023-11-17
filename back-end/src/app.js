import express from "express";
import conectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import handlerError from "./middleware/handlerError.js";
import handler404 from "./middleware/handler404.js";

const conection = await conectDatabase();

conection.on("error", (erro) => {
  console.error("Connection error", erro);
});
conection.once("open", () => {
  console.log("Connection database successfully");
});

const app = express();
routes(app);
app.use(handler404);
// eslint-disable-next-line no-unused-vars
app.use(handlerError);


export default app;