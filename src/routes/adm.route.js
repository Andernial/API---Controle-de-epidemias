import { Router } from "express";
import { loginAdm, registerAdm, verifyJwt } from "../controller/admin.controller.js";


const admRouter = Router();

admRouter.get("/login-adm", loginAdm)

admRouter.post('/register-adm', verifyJwt, registerAdm)

export{ admRouter }