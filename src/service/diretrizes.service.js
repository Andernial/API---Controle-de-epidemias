import { DiretrizesProfissionaisEntity } from "../entities/DiretrizesProfissionais.entity.js";
import { SUCCESS } from "../shared/messages.js";



export class DiretrizesProfissionaisService{
    async createGuidelineService( nameEpidemy, description, urlInfo, data){
        try {
            await DiretrizesProfissionaisEntity.sync()
            const diretriz = await DiretrizesProfissionaisEntity.create( {
                    nameEpidemy, description, urlInfo, data
                
            }) 
                
            return `Diretiz ${SUCCESS.CREATED} ${diretriz} `

        } catch (error) {
            return error
        }
    };
    
    async showAllGuidelineService(){
        try {
            await DiretrizesProfissionaisEntity.sync()
            const diretriz = await DiretrizesProfissionaisEntity.findAll()

            return diretriz

        } catch (error) {
            return error 
        }
    };

    async showByQueryService(nameEpidemy,data){
        try {
            await DiretrizesProfissionaisEntity.sync()

            const values = {nameEpidemy, data}
            const whereClause = Object.fromEntries(
                Object.entries(values).filter(([key, value]) => value !== undefined)
            );

            const diretrizes = await DiretrizesProfissionaisEntity.findAll({
                where: whereClause
   
            })

            if(!diretrizes.length){
                return 'não encontrada'
            }

            return diretrizes

        } catch (error) {
            console.log(error)
            return error
        }
    };

    async updateGuidelineService(id,nameEpidemy, description, urlInfo, data){
        try {
            await DiretrizesProfissionaisEntity.sync()
            const diretrizExists = await DiretrizesProfissionaisEntity.findByPk(id)

            if (!diretrizExists) {
                return 'não encontrada'
            }
    
            const params = {

                nameEpidemy: nameEpidemy !== undefined ? nameEpidemy : diretrizExists.nameEpidemy,
                description: description !== undefined ? description : diretrizExists.description,
                urlInfo: urlInfo !== undefined ? urlInfo : diretrizExists.urlInfo,
                data: data !== undefined ? data : diretrizExists.data,

            }

                await DiretrizesProfissionaisEntity.update(params, {
                    where: {
                        id
                    }
                })
                
                return { message: `Diretriz ${SUCCESS.UPDATED}`, diretriz: await DiretrizesProfissionaisEntity.findByPk(id)}

        } catch (error) {
            return error
        }
    };

    async deleteGuidelineService(id){
        try {
            await DiretrizesProfissionaisEntity.sync()
            const diretrizExists = await DiretrizesProfissionaisEntity.findByPk(id)

            if (!diretrizExists) {
                return 'não encontrada'
            }

            await DiretrizesProfissionaisEntity.destroy({
                where:{
                    id
                }
            })

            return 'destroyed'

        } catch (error) {
            return error
        }
    };

}