import { Router } from "express";
import { createInfoVaccination,  showAllVaccination, showVaccionationByQuery, updateVaccination, deleteVaccination }from "../controller/vacinacao.controller.js";
import { verifyJwt } from "../middleware/verifyJwt.middleware.js";

const VaccinationRouter = Router();


VaccinationRouter.post("/create",verifyJwt,createInfoVaccination);

VaccinationRouter.get("/show-all", showAllVaccination);

VaccinationRouter.get("/show-by", showVaccionationByQuery);

VaccinationRouter.put("/update-by/:id", verifyJwt,updateVaccination);

VaccinationRouter.delete("/delete/:id",verifyJwt, deleteVaccination);


export { VaccinationRouter };
