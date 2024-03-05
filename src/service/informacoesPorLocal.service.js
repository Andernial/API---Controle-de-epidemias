
import { InformacoesPorLocalEntity } from "../entities/InformacoesPorLocal.entity.js";
import { SUCCESS } from "../shared/messages.js";



export class InformacoesPorLocalService {
    async createInformationService(nameState, localName, nameEpidemy, description, numberOfCases, numberOfPossibleCases, numberOfFatalities, urlInfoLocations, data) {
        try {
            await InformacoesPorLocalEntity.sync()
            const information = await InformacoesPorLocalEntity.create({
                nameState, localName, nameEpidemy, description, numberOfCases,numberOfPossibleCases,  numberOfFatalities, urlInfoLocations, data
            })
            
            return { message: `informação ${SUCCESS.CREATED}`, informação: information }

        } catch (error) {
            return error
        }
    };

    async showAllInformationService() {
        try {
            await InformacoesPorLocalEntity.sync()
            const informacoes = await InformacoesPorLocalEntity.findAll()

            return informacoes

        } catch (error) {
            return error 
        }
    };

    async showInformationByQueryService(nameEpidemy, nameState, localName){
        try {
            await InformacoesPorLocalEntity.sync()

            const values = {nameEpidemy, nameState, localName}
            const whereClause = Object.fromEntries(
                Object.entries(values).filter(([key, value]) => value !== undefined)
            );

            const informacoes = await InformacoesPorLocalEntity.findAll({
                where: whereClause
   
            })

            if(!informacoes.length){
                return 'não encontrada'
            }

            return informacoes

        } catch (error) {
            console.log(error)
            return error
        }
    }

    async updateInformationService(id,nameState, localName, nameEpidemy, description, numberOfCases, numberOfPossibleCases,  numberOfFatalities, urlInfoLocations, data){
        try {
            await InformacoesPorLocalEntity.sync()
            const localExists = await InformacoesPorLocalEntity.findByPk(id)

            if (!localExists) {
                return 'não encontrada'
            }
    
            const params = {

                nameState: nameState !== undefined ? nameState : localExists.nameState,
                localName: localName !== undefined ? localName : localExists.localName,
                nameEpidemy: nameEpidemy !== undefined ? nameEpidemy : localExists.nameEpidemy,
                description: description !== undefined ? description : localExists.description,
                numberOfCases: numberOfCases !== undefined ? numberOfCases : localExists.numberOfCases,
                numberOfPossibleCases: numberOfPossibleCases !== undefined ? numberOfPossibleCases : localExists.numberOfPossibleCases,
                numberOfFatalities: numberOfFatalities !== undefined ? numberOfFatalities : localExists.numberOfFatalities,
                urlInfoLocations: urlInfoLocations !== undefined ? urlInfoLocations : localExists.urlInfoLocations,
                data: data !== undefined ? data : localExists.data,

            }
                console.log(urlInfoLocations)

                await InformacoesPorLocalEntity.update(params, {
                    where: {
                        id
                    }
                })
                
                return { message: `informação ${SUCCESS.UPDATED}`, informação: await InformacoesPorLocalEntity.findByPk(id)}

        } catch (error) {
            console.log(error)
            return error
        }
    };

    async deleteInformationService(id){
        try {
            await InformacoesPorLocalEntity.sync()
            const localExists = await InformacoesPorLocalEntity.findByPk(id)

            if (!localExists) {
                return 'não encontrada'
            }

            await InformacoesPorLocalEntity.destroy({
                where:{
                    id
                }
            })

            return 'destroyed'

        } catch (error) {
            return error
        }
    };
};