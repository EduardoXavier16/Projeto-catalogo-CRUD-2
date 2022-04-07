import express from "express";

import { getIndex, getDetalhes } from "../controller/FilmesController.js";

export const routes = express.Router();

routes.get("/Home", getIndex);

routes.get("/Detalhes/:id", getDetalhes);
