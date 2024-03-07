import { Router } from "express";
import { loginAdm, logoutAdm, registerAdm} from "../controller/adm.controller.js";
import { verifyJwt } from "../middleware/verifyJwt.middleware.js";


const admRouter = Router();

admRouter.get("/login", loginAdm)

admRouter.post('/register', verifyJwt, registerAdm)

admRouter.post("/logout", logoutAdm)

export{ admRouter }