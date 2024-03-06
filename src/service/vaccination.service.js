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

    async showAllVaccionationByQueryService (nameVaccination, data, urlInfo) {
        try {
            await VacinacaoEntity.sync()

            const values = {nameVaccination, data, urlInfo}
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

            if (!localExists) {
                return 'não encontrada'
            }

            const params = {
                nameEpidemy: nameEpidemy !== undefined ? nameEpidemy : localExists.localEpidemyName,
                nameVaccination: nameVaccination !== nameVaccination ? nameVaccination : localExists.name, 
                description: description !== description ? description : localExists.description, 
                data: data !== data ? data : localExists.data,
                urlInfo: urlInfo !== urlInfo ? urlInfo : localExists.urlInfo,
            }

            await vacinacao.update(params, {
                where: {
                    id
                }
            })
            
            return await vacinacao.findByPk(id)

        } catch (error) {
        return error
        }
    }

    async deleteVaccinationService(id) {
        try {
            await VacinacaoEntity.sync()
            const localExists = await VacinacaoEntity.findByPk(id)

            if (!localExists) {
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

