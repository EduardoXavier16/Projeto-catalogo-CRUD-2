import express from "express";
import { routes } from "./src/routes/routes.js";
import path from "path";
import dotenv from "dotenv";

const port = 3002;
const app = express();
const __dirname = path.resolve(path.dirname(""));


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(port, (req, res) => {
  console.log(`Servidor rodando na porta ${port}`);
});
