import { RelatosEntity } from "../entities/RelatosDeCasos.entity.js"
import { relateCaseService } from "../service/relatosDeCasos.service.js";
import { SUCCESS,ERRORS } from "../shared/messages.js";


const instanceServiceCases = new relateCaseService()

export const createCases = async (req, res) => {

    await RelatosEntity.sync()
    const {
        name,
        nameEpidemy,
        caseDescription,
        email,
        data,
        nameState,
        localName,
        CPF
    } = req.body
    const newCase = await instanceServiceCases.createCaseService(
        name,
        nameEpidemy,
        caseDescription,
        email,
        data,
        nameState,
        localName,
        CPF

    )


    if (newCase.name === 'SequelizeValidationError') {
        return res.status(400).json({ message: `Erro ${ERRORS.MISSING_DATA} ` })
    }

    if (newCase.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message: `Erro informacao ${ERRORS.ALREADY_EXIST} ` })
    }



    res
        .json({ newCase })
        .status(201)



};

export const showAllCases = async (req, res) => {
    const cases =  await instanceServiceCases.showAllCasesService()
    if(!cases.length){
        return res.status(400).json({message: ` erro ${ERRORS.NOT_FOUND}`})
    }
        res
            .status(201)
            .json({ cases })


}


export const updateCase = async (req, res) => {

    const { id } = req.params

    const {
        name,
        nameEpidemy,
        casedescription,
        data,
        nameState,
        localName
    } = req.query
    const updatedCase = await  instanceServiceCases.updateCaseService(
        id,
        name,
        nameEpidemy,
        casedescription,
        data,
        nameState,
        localName
    )
    if (updatedCase === 'não encontrada') {
        return res.status(400).json({ message: `Erro caso ${ERRORS.NOT_FOUND} ` })
    }

    if (updatedCase.name === 'SequelizeValidationError') {
        return res.status(400).json({ message: `Erro caso ${ERRORS.MISSING_DATA} ` })
    }

    if (updatedCase.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message: `Erro informacao ${ERRORS.ALREADY_EXIST} ` })
    }


    res.status(201).json({ updatedCase })


};

export const showCaseByQuery = async (req, res) => {
    const {
        name,
        nameEpidemy,
        casedescription,
        data,
        nameState,
        localName
    } = req.query

    const cases = await instanceServiceCases.showCaseByQuery(
        name,
        nameEpidemy,
        casedescription,
        data,
        nameState,
        localName
    )



    if (cases === 'não encontrada') {
        return res.status(400).json({ message: `Erro caso ${ERRORS.NOT_FOUND} ` })
    }

    res
        .json({ cases })
        .status(200)


};

export const deleteCase = async (req, res) => {
    const { id } = req.params

    const casesDeleted = await instanceServiceCases.deleteCaseService(id)

    if (casesDeleted === 'não encontrada') {
        return res.status(400).json({ message: `Erro Case ${ERRORS.NOT_FOUND} ` })
    }

    if (casesDeleted === 'destroyed') {
        return res.status(200).json({ message: `informação ${SUCCESS.DELETED}` })


    }


};
