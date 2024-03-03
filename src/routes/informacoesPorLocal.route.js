import { Router } from "express";
import { createInformation, deleteInformation, showAllInformation, showInformationByQuery, updateInformation } from "../controller/informacoes.controller.js";
const InformacoesLocalRouter = Router();

InformacoesLocalRouter.post("/create-informacao", createInformation);

InformacoesLocalRouter.get("/showAll-informacao", showAllInformation);

InformacoesLocalRouter.get("/showby-Query", showInformationByQuery);

InformacoesLocalRouter.put("/update-informacao/:id", updateInformation);

InformacoesLocalRouter.delete("/delete-informacao/:id", deleteInformation );




export { InformacoesLocalRouter };