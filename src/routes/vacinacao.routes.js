import { Router } from "express";
import { createInfoVaccination, showAllVaccination, showVaccionationByQuery, updateVaccination, deleteVaccination } from "../controller/vacinacao.controller.js";
const VaccinationRouter = Router();


VaccinationRouter.post ("/create-vaccination", createInfoVaccination);

VaccinationRouter.get ("/showAll-vaccination", showAllVaccination);

VaccinationRouter.get ("/showBy-query", showVaccionationByQuery);

VaccinationRouter.put ("/update-vaccination/:id", updateVaccination);

VaccinationRouter.delete("/delete-vaccination/:id", deleteVaccination);


export { VaccinationRouter };
