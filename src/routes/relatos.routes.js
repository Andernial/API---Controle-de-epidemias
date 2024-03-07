import {Router } from 'express'
import { createRelatos, getCases, updadeRelatos } from '../controller/relatosCasos.controller.js';

export const relatosCasosRoutes = Router();

relatosCasosRoutes.post("/create-case", createRelatos)

relatosCasosRoutes.get("/get-case", getCases)

relatosCasosRoutes.put("/put-case/:id", updadeRelatos)


