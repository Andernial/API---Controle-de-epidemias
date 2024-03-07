import { RelatosEntity } from "../entities/RelatosDeCasos.entity.js";
import { SUCCESS,ERRORS } from "../shared/messages.js";



export class relateCaseService {
    async createCaseService(
        name,
        nameEpidemy,
        caseDescription,
        email,
        data,
        nameState,
        localName,
        CPF
        ) {
        try {
            await RelatosEntity.sync()
            const newCase = await RelatosEntity.create({
                name,
                nameEpidemy,
                caseDescription,
                email,
                data,
                nameState,
                localName,
                CPF
            })
            return { message: `Relato ${SUCCESS.CREATED}`, relato: newCase }

        } catch (error) {
            return error
        }
    };

    async showAllCasesService() {
        try {
            await RelatosEntity.sync()
            const cases = await RelatosEntity.findAll()

            return cases

        } catch (error) {
            return error
        }
    }

    async showCaseByQuery(
        name,
        nameEpidemy,
        data,
        nameState,
        localName,
    ) {
        try {
            await RelatosEntity.sync()

            const values = {
                name,
                nameEpidemy,
                data,
                nameState,
                localName,
            }
            const whereClause = Object.fromEntries(
                Object.entries(values)
                    .filter(([key, value]) => value !== undefined)
            );

            const cases = await RelatosEntity.findAll({
                where: whereClause
            })
            if (!cases.length) {
                return 'não encontrada'
            }

            return cases

        } catch (error) {
            console.log(error)
            return error
        }

    }

    async updateCaseService(
        id,
        name,
        nameEpidemy,
        caseDescription,
        data,
        nameState,
        localName,
    ) {
        try {
            await RelatosEntity.sync()
            const caseFinded = await RelatosEntity.findByPk(id)
    
            if (!caseFinded) {
                return 'não encontrada'
            }

            const params = {



                name: name !== undefined ? name : caseFinded.name,
                nameEpidemy: nameEpidemy !== undefined ? nameEpidemy : caseFinded.nameEpidemy,
                caseDescription: caseDescription !== undefined ? caseDescription : caseFinded.caseDescription,
                data: data !== undefined ? data : caseFinded.data,
                nameState: nameState !== undefined ? nameState : caseFinded.nameState,
                localName: localName !== undefined ? localName : caseFinded.localName,

            }

            await caseFinded.update(params, {
                where: {
                    id
                }
            })

            return { message: `caso ${SUCCESS.UPDATED}`, caso: await RelatosEntity.findByPk(id) }

        } catch (error) {
            return error
        }
    }

    async deleteCaseService(id) {
        try {
            await RelatosEntity.sync()
            const caseFinded = await RelatosEntity.findByPk(id)

            if (!caseFinded) {
                return 'não encontrada'
            }

            await RelatosEntity.destroy({
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

