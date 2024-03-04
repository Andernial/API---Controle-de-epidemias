import { DiretrizesProfissionaisEntity } from "../entities/DiretrizesProfissionais.entity.js";
import { SUCCESS } from "../shared/messages.js";



export class DiretrizesProfissionaisService{
    async createDiretrizService( nameEpidemy, description, urlInfo, data){
        try {
            await DiretrizesProfissionaisEntity.sync()
            const diretriz = await DiretrizesProfissionaisEntity.create( {
                    nameEpidemy, description, urlInfo, data
                
            }) 
                
            return `Diretiz ${SUCCESS.CREATED} ${diretriz} `

        } catch (error) {
            return error
        }
    }
}