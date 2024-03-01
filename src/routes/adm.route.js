import { Router } from "express";
import { loginAdm, logoutAdm, registerAdm} from "../controller/adm.controller.js";
import { verifyJwt } from "../middleware/verifyJwt.middleware.js";


const admRouter = Router();

admRouter.get("/login-adm", loginAdm)

admRouter.post('/register-adm', verifyJwt, registerAdm)

admRouter.post("/logout-adm", logoutAdm)

export{ admRouter }