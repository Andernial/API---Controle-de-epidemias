import { Router } from "express";
import { admRouter } from "./adm.routes.js";
import { InformacoesLocalRouter } from "./informacoesPorLocal.routes.js";
import { VaccinationRouter } from "./vacinacao.routes.js";
import { DiretrizesRouter } from "./diretrizes.routes.js";
import { relateCaseRouter } from "./relateCases.routes.js";
import { newsRouter } from "./noticia.routes.js";
const routes = Router();


routes.use("/adm", admRouter);
routes.use("/informacao", InformacoesLocalRouter);
routes.use("/vacinacao", VaccinationRouter);
routes.use("/diretriz", DiretrizesRouter)
routes.use("/relatarcasos", relateCaseRouter)
routes.use("/noticias",newsRouter)

export { routes };
