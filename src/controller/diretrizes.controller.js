import { DiretrizesProfissionaisService } from "../service/diretrizes.service.js"
import { ERRORS } from "../shared/messages.js"



const instanteceOfDiretrizService = new DiretrizesProfissionaisService()

const createDiretriz = async (req,res) => {
    const {nameEpidemy, description, urlInfo, data} = req.body

    const newDiretriz = await instanteceOfDiretrizService.createDiretrizService(nameEpidemy, description, urlInfo, data)

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

export { createDiretriz,}