import jwt from 'jsonwebtoken';
import { AdmEntity } from "../entities/Adm.entity.js";
import { SECRET } from '../middleware/verifyJwt.middleware.js';
import { BlackListedTokenEntity } from '../entities/BlackListToken.entity.js';

export class AdmService{
    async LoginAdmService(name,password){
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
     
        try {
              await AdmEntity.sync()
               const newAdm = await AdmEntity.create({
                name,password
               })
               return(newAdm)
        }
         catch (error) {
            return error
        }
    };
    async LogoutAdmService(token){
       
        try {
            await BlackListedTokenEntity.sync()
            const blacklist = await BlackListedTokenEntity.create({token})
    
            return blacklist
        } catch (error) {
            return error
        }
    }
};