import { DiretrizesProfissionaisService } from "../service/diretrizes.service.js"
import { ERRORS, SUCCESS } from "../shared/messages.js"



const instanteceOfDiretrizService = new DiretrizesProfissionaisService()

const createGuideline = async (req,res) => {
    const {nameEpidemy, description, urlInfo, data} = req.body

    const newDiretriz = await instanteceOfDiretrizService.createGuidelineService(nameEpidemy, description, urlInfo, data)

    if (newDiretriz.name === 'SequelizeValidationError') {
        return res.status(400).json({ message: `Erro ${ERRORS.MISSING_DATA} ` })
    }

    if(newDiretriz.name === "SequelizeUniqueConstraintError"){
        return res.status(400).json({message: `diretriz ${ERRORS.ALREADY_EXIST}`})
    }
    console.log(newDiretriz)
    res
    .status(201)
    .json({ newDiretriz })
}

const showAllGuideline= async (req, res) => {

    const diretrizes = await instanteceOfDiretrizService.showAllGuidelineService()
    if(!diretrizes.length){
        return res.status(400).json({message: ` erro ${ERRORS.NOT_FOUND}`})
    }
    res
        .status(200)
        .json({ diretrizes })
};

const showGuidelineByQuery = async (req, res) => {
    const { nameEpidemy, data } = req.query

    const diretrizes = await instanteceOfDiretrizService.showByQueryService(nameEpidemy, data)



    if(diretrizes === 'não encontrada'){
        return res.status(400).json({ message: `Erro diretriz ${ERRORS.NOT_FOUND} ` })
    }

    res
        .status(200)
        .json({ diretrizes })


};

const updateGuideline = async (req, res) => {
    const { id } = req.params
    const { nameEpidemy, description, urlInfo, data } = req.query
    const diretriz = await instanteceOfDiretrizService.updateGuidelineService(id,nameEpidemy, description, urlInfo, data)

    if (diretriz === 'não encontrada') {
        return res.status(400).json({ message: `Erro diretriz ${ERRORS.NOT_FOUND} ` })
    }

    if (diretriz.name === 'SequelizeValidationError') {
        return res.status(400).json({ message: `Erro ${ERRORS.MISSING_DATA} ` })
    }

    if (diretriz.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message: `Erro diretriz ${ERRORS.ALREADY_EXIST} ` })
    }

    res
        .status(201)
        .json(diretriz)
};

const deleteGuideline = async (req, res) => {
    const { id } = req.params

    const diretriz = await instanteceOfDiretrizService.deleteGuidelineService(id)

    if (diretriz === 'não encontrada') {
        return res.status(400).json({ message: `Erro diretriz ${ERRORS.NOT_FOUND} ` })
    }

    if (diretriz === 'destroyed') {
        return res.status(201).json({ message: `diretriz ${SUCCESS.DELETED}` })


    }


};

export { createGuideline, showAllGuideline, showGuidelineByQuery,updateGuideline, deleteGuideline}