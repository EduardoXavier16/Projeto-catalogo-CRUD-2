import express from 'express';
import { Router } from 'express';
import { getIndex } from '../controller/FilmesController.js';

export const routes = express.Router();

Router.get("/Home", getIndex);

