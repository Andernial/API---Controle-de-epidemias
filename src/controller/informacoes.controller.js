import { InformacoesPorLocalService } from "../service/informacoesPorLocal.service.js";
import { ERRORS, SUCCESS } from "../shared/messages.js";



const instanceOfInformacoes = new InformacoesPorLocalService();


const createInformation = async (req, res) => {
    const { nameState, localName, nameEpidemy, description, numberOfCases, numberOfPossibleCases, numberOfFatalities, urlInfoLocations, data } = req.body

    const informacao = await instanceOfInformacoes.createInformationService(nameState, localName, nameEpidemy, description, numberOfCases, numberOfPossibleCases, numberOfFatalities, urlInfoLocations, data)

    if (informacao.name === 'SequelizeValidationError') {
        return res.status(400).json({ message: `Erro ${ERRORS.MISSING_DATA} ` })
    }

    if (informacao.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message: `Erro informacao ${ERRORS.ALREADY_EXIST} ` })
    }

    res
        .status(201)
        .json(informacao)

};

const showAllInformation = async (req, res) => {

    const informacoes = await instanceOfInformacoes.showAllInformationService()
    res
        .status(200)
        .json({ informacoes })
};

const showInformationByQuery = async (req, res) => {
    const { nameEpidemy, nameState, localName } = req.query

    const informacoes = await instanceOfInformacoes.showInformationByQueryService(nameEpidemy, nameState, localName)



    if(informacoes === 'não encontrada'){
        return res.status(400).json({ message: `Erro informacao ${ERRORS.NOT_FOUND} ` })
    }

    res
        .status(200)
        .json({ informacoes })


}

const updateInformation = async (req, res) => {
    const { id } = req.params
    const { nameState, localName, nameEpidemy, description, numberOfCases, numberOfPossibleCases, numberOfFatalities, urlInfoLocations, data } = req.query
    const informacao = await instanceOfInformacoes.updateInformationService(id, nameState, localName, nameEpidemy, description, numberOfCases, numberOfPossibleCases, numberOfFatalities, urlInfoLocations, data)

    if (informacao === 'não encontrada') {
        return res.status(400).json({ message: `Erro informacao ${ERRORS.NOT_FOUND} ` })
    }

    if (informacao.name === 'SequelizeValidationError') {
        return res.status(400).json({ message: `Erro ${ERRORS.MISSING_DATA} ` })
    }

    if (informacao.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message: `Erro informacao ${ERRORS.ALREADY_EXIST} ` })
    }

    res
        .status(201)
        .json(informacao)
};

const deleteInformation = async (req, res) => {
    const { id } = req.params

    const informacao = await instanceOfInformacoes.deleteInformationService(id)
    console.log(informacao)
    if (informacao === 'não encontrada') {
        return res.status(400).json({ message: `Erro informacao ${ERRORS.NOT_FOUND} ` })
    }

    if (informacao === 'destroyed') {
        return res.status(201).json({ message: `informação ${SUCCESS.DELETED}` })


    }


};

export { createInformation, showAllInformation, updateInformation, deleteInformation, showInformationByQuery };