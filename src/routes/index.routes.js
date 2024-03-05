import { Router }  from "express";
import { admRouter } from "./adm.route.js";
import { InformacoesLocalRouter } from "./informacoesPorLocal.route.js";
import { relatosCasosRoutes } from "./relatos.routes.js";
const routes = Router();


routes.use("/adm", admRouter);
routes.use("/informacao", InformacoesLocalRouter);
routes.use("/relato-casos",relatosCasosRoutes)

export{ routes };
