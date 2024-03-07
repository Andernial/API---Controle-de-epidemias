import { NoticiaEntity } from "../entities/Noticias.entity.js";
import { SUCCESS } from "../shared/messages.js";



export class newsService {
    async createNewsService(
        title, nameEpidemy, description, urlNews, data) {
        try {
            await NoticiaEntity.sync()
            const newNews = await NoticiaEntity.create({
                title, nameEpidemy, description, urlNews, data  })
            return { message: `Notícia ${SUCCESS.CREATED}`, relato: newNews }

        } catch (error) {
            return error
        }
    };

    async showAllNewsService() {
        try {
            await NoticiaEntity.sync()
            const news = await NoticiaEntity.findAll()

            return news

        } catch (error) {
            return error
        }
    }

    async showNewsByQuery(title, nameEpidemy, description, urlNews, data, ) {
        try {
            await NoticiaEntity.sync()

            const values = {title, nameEpidemy, description, urlNews, data, }
            const whereClause = Object.fromEntries(
                Object.entries(values)
                    .filter(([key, value]) => value !== undefined)
            );

            const news = await NoticiaEntity.findAll({
                where: whereClause
            })
            if (!news.length) {
                return 'não encontrada'
            }

            return news

        } catch (error) {
            console.log(error)
            return error
        }

    }

    async updateNewsService(
        id,
        title, 
        nameEpidemy,
         description, 
         urlNews, 
         data,
    ) {
        try {
            await NoticiaEntity.sync()
            const newFinded = await NoticiaEntity.findByPk(id)
    
            if (!newFinded) {
                return 'não encontrada'
            }

            const params = {



                title: title !== undefined ? title : newFinded.title,
                nameEpidemy: nameEpidemy !== undefined ? nameEpidemy : newFinded.nameEpidemy,
                description: description !== undefined ? description : newFinded.description,
                urlNews: urlNews !== undefined ? urlNews : newFinded.urlNews,
                data: data !== undefined ? data : newFinded.data,
            

            }

            await newFinded.update(params, {
                where: {
                    id
                }
            })

            return { message: `Notícia ${SUCCESS.UPDATED}`, Notícia: await NoticiaEntity.findByPk(id) }

        } catch (error) {
            return error
        }
    }

    async deleteNewsService(id) {
        try {
            await NoticiaEntity.sync()
            const newFinded = await NoticiaEntity.findByPk(id)

            if (!newFinded) {
                return 'não encontrada'
            }

            await NoticiaEntity.destroy({
                where: {
                    id
                }
            })

            return 'destroyed'

        } catch (error) {
            return error
        }
    }
};

