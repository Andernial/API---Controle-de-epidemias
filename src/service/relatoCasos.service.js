import { RelatosEntity } from "../entities/RelatosDeCasos.entity.js"
import { ERRORS } from "../shared/messages.js"

export class relatosCasosServices {
    serviceUpdateRelato = async( id,newName,newNameEpidemy,newCasedescription,newData,newNameState,newLocalName)=> {
        try {
            const relatoAlreadExist = RelatosEntity.findByPk(id)
            if(relatoAlreadExist){
                return `relato ${ERRORS.ALREADY_EXIST}`
            }
            const newCase = await RelatosEntity.update({
                name:newName,nameEpidemy:newNameEpidemy,Casedescription:newCasedescription,data:newData,nameState:newNameState,localName:newLocalName}, {
                    where:{
                        id
                    }
                })
                return newCase
        } catch (error) {
            console.error('não foi possível atualizar o caso')
        }
    }
}


