import { RelatosEntity } from "../entities/RelatosDeCasos.entity.js"
import { relatosCasosServices } from "../service/relatoCasos.service.js";

const instanceServiceCases = new relatosCasosServices() 

export const createRelatos = async(req,res)=> {
    try{
        await RelatosEntity.sync()
        const {
            name,nameEpidemy,Casedescription,email,data,nameState,localName,CPF
        } = req.body 
        const newCase = RelatosEntity.create({
            name,nameEpidemy,Casedescription,email,data,nameState,localName,CPF
        })
        res.status(201).json({newCase})

    }catch(error){
        console.error('Não foi possível criar o seu relato')
    }
    
};

export const getCases = async(req,res)=> {
    try{
        await RelatosEntity.sync()
        const cases = await RelatosEntity.findAll()
        res.status(201).json({cases})

    }catch(error){
        console.error('Não foi possível criar o seu relato')
    }
    
}

export const updadeRelatos = async(req,res)=> {

        const{id} = req.params
        console.log(id)
        const {
         newName,newNameEpidemy,newCasedescription,newData,newNameState,newLocalName 
        } = req.body 
        const updatedCase = instanceServiceCases.serviceUpdateRelato(
            id,
            newName,
            newNameEpidemy,
            newCasedescription,
            newData,
            newNameState,
            newLocalName )
        

        res.status(201).json({updatedCase})

    
};