import { Router } from "express";
import { createDiretriz } from "../controller/diretrizes.controller.js";

const DiretrizesRouter = Router();

DiretrizesRouter.post("/create", createDiretriz);

export { DiretrizesRouter }
