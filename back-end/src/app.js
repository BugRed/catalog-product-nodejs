import express from "express";
import conectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conection = await conectDatabase();

conection.on("error", (erro) => {
    console.error("Connection error", erro);
});

conection.once("open", () => {
    console.log("Connection database successfully");
});

const app = express();
routes(app);


export default app;