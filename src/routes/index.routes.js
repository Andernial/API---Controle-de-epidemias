import { Router }  from "express";
import { admRouter } from "./adm.route.js";
const routes = Router();


routes.use("/adm",admRouter)



export{ routes };
