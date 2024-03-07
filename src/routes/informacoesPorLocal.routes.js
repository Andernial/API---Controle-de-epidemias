import { Router } from "express";
import { createInformation, deleteInformation, showAllInformation, showInformationByQuery, updateInformation } from "../controller/informacoes.controller.js";
import { verifyJwt } from "../middleware/verifyJwt.middleware.js";
const InformacoesLocalRouter = Router();

InformacoesLocalRouter.post("/create", verifyJwt,createInformation);

InformacoesLocalRouter.get("/show-all", showAllInformation);

InformacoesLocalRouter.get("/show-by",   showInformationByQuery);

InformacoesLocalRouter.put("/update-by/:id", verifyJwt, updateInformation);

InformacoesLocalRouter.delete("/delete/:id", verifyJwt, deleteInformation );




export { InformacoesLocalRouter };