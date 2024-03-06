import { Router } from "express";
import { createInformation, deleteInformation, showAllInformation, showInformationByQuery, updateInformation } from "../controller/informacoes.controller.js";
const InformacoesLocalRouter = Router();

InformacoesLocalRouter.post("/create", createInformation);

InformacoesLocalRouter.get("/show-all", showAllInformation);

InformacoesLocalRouter.get("/show-by", showInformationByQuery);

InformacoesLocalRouter.put("/update-by/:id", updateInformation);

InformacoesLocalRouter.delete("/delete/:id", deleteInformation );




export { InformacoesLocalRouter };