import {Router}  from 'express';
import { createNews, deleteNews, showAllNews, showNewsByQuery, updateNews } from '../controller/noticia.controller.js';



const newsRouter = Router()


        

newsRouter.post('/create',createNews)


newsRouter.get('/show-all',showAllNews)

newsRouter.get('/show-by-query',showNewsByQuery)

newsRouter.put('/update/:id',updateNews)

newsRouter.delete('/delete/:id',deleteNews)




export { newsRouter }