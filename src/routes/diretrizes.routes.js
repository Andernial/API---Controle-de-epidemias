import { Router } from "express";
import { createGuideline, deleteGuideline, showAllGuideline, showGuidelineByQuery, updateGuideline } from "../controller/diretrizes.controller.js";
import { verifyJwt } from "../middleware/verifyJwt.middleware.js";

const DiretrizesRouter = Router();

DiretrizesRouter.post("/create", verifyJwt,createGuideline);

DiretrizesRouter.get("/show-all", verifyJwt,showAllGuideline);

DiretrizesRouter.get("/show-by", verifyJwt,showGuidelineByQuery);

DiretrizesRouter.put("/update-by/:id", verifyJwt,updateGuideline);

DiretrizesRouter.delete("/delete/:id", verifyJwt,deleteGuideline);




export { DiretrizesRouter }
