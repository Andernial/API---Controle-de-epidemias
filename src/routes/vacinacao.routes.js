import { Router } from "express";
import { createInfoVaccination,  showAllVaccination, showVaccionationByQuery, updateVaccination, deleteVaccination }from "../controller/vacinacao.controller.js";

const VaccinationRouter = Router();


VaccinationRouter.post("/create", createInfoVaccination);

VaccinationRouter.get("/show-all", showAllVaccination);

VaccinationRouter.get("/show-by", showVaccionationByQuery);

VaccinationRouter.put("/update-by/:id", updateVaccination);

VaccinationRouter.delete("/delete/:id", deleteVaccination);


export { VaccinationRouter };
