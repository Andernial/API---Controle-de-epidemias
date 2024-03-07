import { Router } from "express";
import { createCases, deleteCase, showAllCases, showCaseByQuery, updateCase } from "../controller/relatosCaso.controller.js";


const relateCaseRouter = Router()



relateCaseRouter.post('/create', createCases);


relateCaseRouter.get('/show-all', showAllCases);

relateCaseRouter.get('/show-by', showCaseByQuery)

relateCaseRouter.put('/update-by/:id', updateCase)


relateCaseRouter.delete('/delete/:id', deleteCase)



export { relateCaseRouter }