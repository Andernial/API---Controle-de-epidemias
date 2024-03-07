import { RelatosEntity } from "../entities/RelatosDeCasos.entity.js"
import { newsService } from "../service/noticias.service.js";
import { SUCCESS,ERRORS } from "../shared/messages.js";


const instanceServiceNews = new newsService()

export const createNews = async (req, res) => {

    await RelatosEntity.sync()
    const {
        title, 
        nameEpidemy, 
        description, 
        urlNews, 
        data
    } = req.body
    const newNews = await instanceServiceNews.createNewsService(
        title, 
        nameEpidemy, 
        description, 
        urlNews, 
        data

    )


    if (newNews.name === 'SequelizeValidationError') {
        return res.status(400).json({ message: `Erro ${ERRORS.MISSING_DATA} ` })
    }

    if (newNews.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message: `Erro informacao ${ERRORS.ALREADY_EXIST} ` })
    }



    res
        .json({ newNews })
        .status(201)



};

export const showAllNews = async (req, res) => {
    const news =  await instanceServiceNews.showAllNewsService()
    
    if(!news.length){
        return res.status(400).json({message: ` erro ${ERRORS.NOT_FOUND}`})
    }
        res
            .status(201)
            .json({ news})


}


export const updateNews = async (req, res) => {

    const { id } = req.params

    const {title, nameEpidemy, description, urlNews, data} = req.query
    const updatedNews = await  instanceServiceNews.updateNewsService(
        id,
        title, nameEpidemy, description, urlNews, data)
    if (updatedNews=== 'não encontrada') {
        return res.status(400).json({ message: `Erro caso ${ERRORS.NOT_FOUND} ` })
    }

    if (updatedNews.name === 'SequelizeValidationError') {
        return res.status(400).json({ message: `Erro caso ${ERRORS.MISSING_DATA} ` })
    }

    if (updatedNews.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message: `Erro informacao ${ERRORS.ALREADY_EXIST} ` })
    }


    res.status(201).json({updatedNews})


};

export const showNewsByQuery = async (req, res) => {
    const {
        title, 
        nameEpidemy, 
        description, 
        urlNews, 
        data
    } = req.query

    const news = await instanceServiceNews.showNewsByQuery(
        title, 
        nameEpidemy, 
        description, 
        urlNews, 
        data
    )



    if (news === 'não encontrada') {
        return res.status(400).json({ message: `Erro caso ${ERRORS.NOT_FOUND} ` })
    }

    res
        .json({ news })
        .status(200)


};

export const deleteNews = async (req, res) => {
    const { id } = req.params

    const newsDeleted = await instanceServiceNews.deleteNewsService(id)

    if (newsDeleted === 'não encontrada') {
        return res.status(400).json({ message: `Erro notícia ${ERRORS.NOT_FOUND} ` })
    }

    if (newsDeleted === 'destroyed') {
        return res.status(200).json({ message: `notícia ${SUCCESS.DELETED}` })


    }


};
