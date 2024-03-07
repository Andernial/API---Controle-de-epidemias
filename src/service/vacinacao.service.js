import {VacinacaoEntity} from "../entities/VacinacaoEntity.js";


export class vacinacaoService {
    async createInformationVaccinationService(nameEpidemy, nameVaccination, description, data, urlInfo) {
        try {
            await VacinacaoEntity.sync()
            const vaccination = await VacinacaoEntity.create({
                nameEpidemy, nameVaccination, description, data, urlInfo
            })

            return vaccination
   
        } catch (error) {
            return error
        }
    };

    async showAllVaccionationService() {
        try {
            await VacinacaoEntity.sync()
            const vacinacao = await VacinacaoEntity.findAll()

            return vacinacao

        } catch (error) {
            return error 
        }
    }

    async showAllVaccionationByQueryService (nameVaccination, data, urlInfo,nameEpidemy) {
        try {
            await VacinacaoEntity.sync()

            const values = {nameVaccination, data, urlInfo,nameEpidemy}
            const whereClause = Object.fromEntries(
                Object.entries(values).filter(([key, value]) => value !== undefined)
            );

            const vacinacoes = await VacinacaoEntity.findAll({
                where: whereClause
            })
            if(!vacinacoes.length){
                return 'não encontrada'
            }

            return vacinacoes

        } catch (error) {
            console.log(error)
            return error
        }

    }

    async updateVaccinationService(id, nameEpidemy, nameVaccination, description, data, urlInfo) {
        try {
            await VacinacaoEntity.sync()
            const vacinacao = await VacinacaoEntity.findByPk(id)

            if (!vacinacao) {
                return 'não encontrada'
            }

            const params = {
                nameEpidemy: nameEpidemy !== undefined ? nameEpidemy :vacinacao.nameEpidemy,
                nameVaccination: nameVaccination !== nameVaccination ? nameVaccination : vacinacao.nameVaccination, 
                description: description !== description ? description : vacinacao.description, 
                data: data !== data ? data : vacinacao.data,
                urlInfo: urlInfo !== urlInfo ? urlInfo :vacinacao.urlInfo,
            }

            await vacinacao.update(params, {
                where: {
                    id
                }
            })

            return await VacinacaoEntity.findByPk(id)
           
        } catch (error) {
           
        return error
        }
    }

    async deleteVaccinationService(id) {
        try {
            await VacinacaoEntity.sync()
            const vacination = await VacinacaoEntity.findByPk(id)

            if (!vacination) {
                return 'não encontrada'
            }

            await VacinacaoEntity.destroy({
                where:{
                    id
                }
            })

            return 'destroyed'

        } catch (error) {
            return error
        }
    }
};

