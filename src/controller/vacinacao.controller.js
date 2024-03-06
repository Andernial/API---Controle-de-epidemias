import { vacinacaoService } from "../service/vaccination.service.js";
import { ERRORS, SUCCESS } from "../shared/messages.js";

const infoVaccination = new vacinacaoService();

const createInfoVaccination = async (req, res) => {
    const {nameEpidemy, nameVaccination, description, data, urlInfo} = req.body

    const vaccination = await infoVaccination.createInformationVaccinationService(nameEpidemy, nameVaccination, description, data, urlInfo) 
    console.log(vaccination)


    if (vaccination.name === 'SequelizeValidationError') {
        return res.status(400).json({ message: `Erro ${ERRORS.MISSING_DATA} ` })
    }

    if (vaccination.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message: `Erro informacao ${ERRORS.ALREADY_EXIST} ` })
    }

    res
        .status(201)
        .json({ message: `informação ${SUCCESS.CREATED}`, informação: vaccination })
};

const showAllVaccination = async (req, res) => {
    
    const allVaccination = await infoVaccination.showAllVaccionationService()

    res
        .status(201)
        .json({ message: `informação ${SUCCESS.CREATED}`, informação: allVaccination })
};

const showVaccionationByQuery = async (req, res) => {

    const {nameVaccination, data, urlInfo} = req.query

    const vaccination = await infoVaccination.showAllVaccionationByQueryService(nameVaccination, data, urlInfo)

    if(vaccination === 'não encontrada'){
        return res.status(400).json({ message: `Erro informacao ${ERRORS.NOT_FOUND} ` })
    }

    res
        .status(200)
        .json({ vaccination })
};

const updateVaccination = async (req, res) => {
    const { id } = req.params
    const { nameEpidemy, nameVaccination, description, data, urlInfo } = req.query
    const vaccination = await infoVaccination.updateVaccinationService(id, nameEpidemy, nameVaccination, description, data, urlInfo)

    if (vaccination === 'não encontrada') {
        return res.status(400).json({ message: `Erro informacao ${ERRORS.NOT_FOUND} ` })
    }

    if (vaccination.name === 'SequelizeValidationError') {
        return res.status(400).json({ message: `Erro ${ERRORS.MISSING_DATA} ` })
    }

    if (vaccination.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message: `Erro vaccination ${ERRORS.ALREADY_EXIST} ` })
    }

    res
    .status(201)
    .json({ message: `vacinação ${SUCCESS.UPDATED}`, informação: vaccination })
};

const deleteVaccination = async (req, res) => {
    
    const { id } = req.params

    const vaccination = await infoVaccination.deleteVaccinationService(id)
    console.log(vaccination)

    if (vaccination === 'não encontrada') {
        return res.status(400).json({ message: `Erro vacination ${ERRORS.NOT_FOUND} ` })
    }

    if (vaccination === 'destroyed') {
        return res.status(201).json({ message: `vacination ${SUCCESS.DELETED}` })


    }
};

export { createInfoVaccination, showAllVaccination, showVaccionationByQuery, updateVaccination, deleteVaccination};