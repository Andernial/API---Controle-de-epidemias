import jwt from 'jsonwebtoken';
import util from 'util';
import { BlackListedTokenEntity } from '../entities/BlackListToken.entity.js';
export const SECRET = "4654s465d465fg"

export const verifyJwt = async (req, res, next ) =>{
    const token = req.headers['x-acess-token']
    const verifyPromise = util.promisify(jwt.verify)
    const verifyBlackList = await BlackListedTokenEntity.findByPk(token)

    try{
        if(verifyBlackList){
           return  res.status(401).json({message:'token invalido!'}).end()
        }

        const decoded = await verifyPromise(token, SECRET)
        req.admid = decoded.admid
        next();
    }catch(error){
        res.status(401).json({message:'não autorizado'}).end()
    }
};
