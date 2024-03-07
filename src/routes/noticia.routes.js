import { Router } from 'express';
import { createNews, deleteNews, showAllNews, showNewsByQuery, updateNews } from '../controller/noticia.controller.js';
import { verifyJwt } from '../middleware/verifyJwt.middleware.js';
const newsRouter = Router()

newsRouter.post('/create',verifyJwt,createNews)

newsRouter.get('/show-all', showAllNews)

newsRouter.get('/show-by', showNewsByQuery)

newsRouter.put('/update-by/:id', verifyJwt,updateNews)

newsRouter.delete('/delete/:id', verifyJwt,deleteNews)




export { newsRouter }