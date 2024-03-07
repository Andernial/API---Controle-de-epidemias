import { Router } from "express";
import { createCases, deleteCase, showAllCases, showCaseByQuery, updateCase } from "../controller/relatosCaso.controller.js";
import { verifyJwt } from "../middleware/verifyJwt.middleware.js";
const relateCaseRouter = Router()

relateCaseRouter.post('/create', createCases); 

relateCaseRouter.get('/show-all', verifyJwt,showAllCases);

relateCaseRouter.get('/show-by', verifyJwt,showCaseByQuery)

relateCaseRouter.put('/update-by/:id', verifyJwt,updateCase)


relateCaseRouter.delete('/delete/:id',verifyJwt, deleteCase)



export { relateCaseRouter }