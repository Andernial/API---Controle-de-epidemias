import jwt from 'jsonwebtoken';
import { AdmEntity } from "../entities/Adm.entities.js";
import { SECRET } from '../controller/adm.controller.js';

export class AdmService{
    async loginAdmService(name,password){
        try {
            await AdmEntity.sync()
            
            const adm = await AdmEntity.findOne({
             where: {
                 name,
                 password
             }
            })
        
            if(adm){ 
                const token = jwt.sign({admid : adm.id}, SECRET, { expiresIn: 300 })
                return  {auth : true, token}
                
            }

            return 'not found'
      
        } catch (error) {
            return error
        }
    };
    async RegisterAdmService(name,password){
        await AdmEntity.sync()
        try {

               const newAdm = await AdmEntity.create({
                name,password
               })
               return(newAdm)
        }
         catch (error) {
            return error
        }
    };
};