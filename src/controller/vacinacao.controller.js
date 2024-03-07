import { vacinacaoService } from "../service/vacinacao.service.js";
import { ERRORS, SUCCESS } from "../shared/messages.js";

const infoVaccination = new vacinacaoService();

export const createInfoVaccination = async (req, res) => {
    const {nameEpidemy, nameVaccination, description, data, urlInfo} = req.body

    const vaccination = await infoVaccination.createInformationVaccinationService(nameEpidemy, nameVaccination, description, data, urlInfo) 
   


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

export const showAllVaccination = async (req, res) => {
    
    const allVaccination = await infoVaccination.showAllVaccionationService()
    if(!allVaccination.length){
        return res.status(400).json({message: ` erro ${ERRORS.NOT_FOUND}`})
    }

    res
        .status(201)
        .json({ message: `informação ${SUCCESS.CREATED}`, informação: allVaccination })
};

export const showVaccionationByQuery = async (req, res) => {

    const {nameVaccination, data, urlInfo,nameEpidemy} = req.query

    const vaccination = await infoVaccination.showAllVaccionationByQueryService(nameVaccination, data, urlInfo,nameEpidemy)

    if(vaccination === 'não encontrada'){
        return res.status(400).json({ message: `Erro informacao ${ERRORS.NOT_FOUND} ` })
    }

    res
        .status(200)
        .json({ vaccination })
};

export const updateVaccination = async (req, res) => {
    const { id } = req.params
    const { nameEpidemy, nameVaccination, description, data, urlInfo } = req.query
    const vaccination = await infoVaccination.updateVaccinationService(id, nameEpidemy, nameVaccination, description, data, urlInfo)
    console.log(vaccination)
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

export const deleteVaccination = async (req, res) => {
    
    const { id } = req.params

    const vaccination = await infoVaccination.deleteVaccinationService(id)
   

    if (vaccination === 'não encontrada') {
        return res.status(400).json({ message: `Erro vacination ${ERRORS.NOT_FOUND} ` })
    }

    if (vaccination === 'destroyed') {
        return res.status(201).json({ message: `vacination ${SUCCESS.DELETED}` })


    }
};

