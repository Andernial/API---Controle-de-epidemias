import { Router }  from "express";
import { admRouter } from "./adm.route.js";
import { InformacoesLocalRouter } from "./informacoesPorLocal.route.js";
const routes = Router();


routes.use("/adm", admRouter);
routes.use("/informacao", InformacoesLocalRouter);


export{ routes };
