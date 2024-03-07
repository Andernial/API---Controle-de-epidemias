import { Router } from "express";
import { createGuideline, deleteGuideline, showAllGuideline, showGuidelineByQuery, updateGuideline } from "../controller/diretrizes.controller.js";

const DiretrizesRouter = Router();

DiretrizesRouter.post("/create", createGuideline);

DiretrizesRouter.get("/show-all", showAllGuideline);

DiretrizesRouter.get("/show-by", showGuidelineByQuery);

DiretrizesRouter.put("/update-by/:id", updateGuideline);

DiretrizesRouter.delete("/delete/:id", deleteGuideline);




export { DiretrizesRouter }
