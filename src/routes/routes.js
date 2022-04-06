import express from 'express';

import { getIndex } from '../controller/FilmesController.js';

export const routes = express.Router();

routes.get("/Home", getIndex);